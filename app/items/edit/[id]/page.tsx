'use client';

import { useState, useEffect, FormEvent } from 'react';
import { getItem, editItem } from '@/utils/localStorage';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface PageProps {
  params: {
    id: string;
  };
}

export default function EditItemPage({ params }: PageProps) {
  const router = useRouter();
  const { id } = params;
  
  const [formData, setFormData] = useState({
    username: '',
    title: '',
    content: '',
    image: '',
    url: ''
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (id) {
      try {
        const item = getItem(id);
        if (item) {
          setFormData({
            username: item.username,
            title: item.title,
            content: item.content,
            image: item.image || '',
            url: item.url || ''
          });
        } else {
          setError('해당 항목을 찾을 수 없습니다.');
        }
      } catch {
        setError('항목을 불러오는 중 오류가 발생했습니다.');
      } finally {
        setIsLoading(false);
      }
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Validate form data
      if (!formData.title.trim()) {
        throw new Error('제목을 입력해주세요.');
      }
      if (!formData.content.trim()) {
        throw new Error('내용을 입력해주세요.');
      }
      if (!formData.username.trim()) {
        throw new Error('사용자 이름을 입력해주세요.');
      }

      // Update item
      const updatedItem = editItem(id, formData);
      
      if (!updatedItem) {
        throw new Error('항목 수정에 실패했습니다.');
      }
      
      // Show success message
      setSuccess(true);
      
      // Redirect after a short delay
      setTimeout(() => {
        router.push(`/items/${id}`);
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : '저장 중 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto p-6 flex justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error && !formData.title) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <p>{error}</p>
        </div>
        <Link href="/items" className="text-blue-600 hover:underline">
          ← 목록으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">항목 수정하기</h1>
        <Link href={`/items/${id}`} className="text-blue-600 hover:underline">
          취소
        </Link>
      </div>
      
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-6 rounded">
          <p>항목이 성공적으로 수정되었습니다. 상세 페이지로 이동합니다.</p>
        </div>
      )}
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-6 rounded">
          <p>{error}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            사용자 이름
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            제목
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            내용
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
            이미지 URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formData.image && (
            <div className="mt-2">
              <p className="text-sm text-gray-500 mb-1">이미지 미리보기:</p>
              <Image 
                src={formData.image} 
                alt="Preview" 
                width={400}
                height={300}
                className="h-40 object-cover rounded border border-gray-300" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x300?text=Image+Error";
                }}
              />
            </div>
          )}
        </div>
        
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
            URL
          </label>
          <input
            type="text"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex items-center justify-between pt-4">
          <Link
            href={`/items/${id}`}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            취소
          </Link>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? '저장 중...' : '저장하기'}
          </button>
        </div>
      </form>
    </div>
  );
} 