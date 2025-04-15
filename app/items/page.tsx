'use client';

import { useState, useEffect } from 'react';
import { getItems, deleteItem } from '@/utils/localStorage';
import Link from 'next/link';
import Image from 'next/image';

interface Item {
  id: string;
  username: string;
  title: string;
  url: string;
  content: string;
  image: string;
  createdAt: number;
}

export default function ItemsPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  useEffect(() => {
    // Load items from localStorage
    setItems(getItems());
    setIsLoading(false);
  }, []);

  const handleDelete = (id: string) => {
    if (deleteConfirm === id) {
      // User confirmed deletion
      const success = deleteItem(id);
      if (success) {
        // Update the items list
        setItems(items.filter(item => item.id !== id));
      }
      setDeleteConfirm(null);
    } else {
      // Ask for confirmation
      setDeleteConfirm(id);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">저장된 항목 목록</h1>
        <Link
          href="/create"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          새 항목 작성
        </Link>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : items.length === 0 ? (
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <p className="text-gray-600 mb-4">저장된 항목이 없습니다.</p>
          <Link
            href="/create"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 inline-block transition-colors"
          >
            새 항목 작성하기
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map(item => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {item.image && (
                <div className="w-full h-48 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                    {item.username.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium">{item.username}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{item.content}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500" style={{ display: 'none' }}>{formatDate(item.createdAt)}</span>
                  <div className="flex space-x-2 ml-auto">
                    <Link 
                      href={`/items/${item.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      보기
                    </Link>
                    <Link 
                      href={`/items/edit/${item.id}`}
                      className="text-green-600 hover:underline"
                    >
                      수정
                    </Link>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className={`text-red-600 hover:underline ${deleteConfirm === item.id ? 'font-bold' : ''}`}
                    >
                      {deleteConfirm === item.id ? '확인' : '삭제'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 