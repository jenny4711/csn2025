'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { saveItem } from '@/utils/localStorage';

export default function CreateItemPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    title: '',
    content: '',
    image: '',
    url: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      
      // Generate URL if not provided
      const itemData = {
        ...formData,
        url: formData.url || `/explore/${formData.username.toLowerCase().replace(/\s+/g, '-')}`
      };

      // Save item
      const savedItem = saveItem(itemData);
      
      // Show success message
      setSuccess(true);
      
      // Reset form
      setFormData({
        username: '',
        title: '',
        content: '',
        image: '',
        url: ''
      });
      
      // Redirect after a short delay
      setTimeout(() => {
        router.push('/explore');
      }, 2000);
    } catch (err) {
      // Handle error
      setError(err instanceof Error ? err.message : '저장 중 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">새 항목 작성하기</h1>
      
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-6 rounded">
          <p>항목이 성공적으로 저장되었습니다. 목록 페이지로 이동합니다.</p>
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
            rows={4}
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
              <img 
                src={formData.image} 
                alt="Preview" 
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
            URL (선택사항)
          </label>
          <input
            type="text"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="/explore/your-custom-url"
          />
          <p className="text-xs text-gray-500 mt-1">
            비워두면 사용자 이름을 기반으로 자동 생성됩니다.
          </p>
        </div>
        
        <div className="pt-4">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? '저장 중...' : '저장하기'}
          </button>
        </div>
      </form>
    </div>
  );
} 