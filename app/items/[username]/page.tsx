'use client';

import { useState, useEffect } from 'react';
// Assuming getItem can fetch by username, or you have a getItemByUsername function
import { getItem } from '@/utils/localStorage'; 
import Link from 'next/link';
import Image from 'next/image';
export async function getStaticProps({params}:{params:Promise<any>}){
  const {username} = await params;
  return {
    props:{
      username
    }
  }
}
interface Item {
  id: string; // Keep id for potential internal use
  username: string;
  title: string;
  content: string;
  image?: string;
  url: string;
  createdAt: number;
}

export default function ItemDetailPage({
  params,
}: {
  params: { username: string };
}) {
  const { username } = params;
  const [item, setItem] = useState<Item | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (username) {
      try {
        // Fetch item using username - adjust getItem logic if needed
        const foundItem = getItem(username); // Or getItemByUsername(username)
        if (foundItem) {
          setItem(foundItem);
        } else {
          setError('해당 사용자의 항목을 찾을 수 없습니다.');
        }
      } catch {
        setError('항목을 불러오는 중 오류가 발생했습니다.');
      } finally {
        setIsLoading(false);
      }
    }
  }, [username]);

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto p-6 flex justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !item) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <p>{error || '항목을 찾을 수 없습니다.'}</p>
        </div>
        {/* Adjust link back if needed */}
        <Link href="/explore" className="text-blue-600 hover:underline">
          ← 목록으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-6">
         {/* Adjust link back if needed */}
        <Link href="/explore" className="text-blue-600 hover:underline">
          ← 목록으로 돌아가기
        </Link>
      </div>

      <article className="bg-white rounded-lg shadow-md overflow-hidden">
        {item.image && (
          <div className="w-full h-64 sm:h-72 md:h-96 relative">
            <Image 
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden text-lg font-medium">
              {item.username.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="font-medium">{item.username}</div>
              {/* Displaying createdAt is optional, kept original logic */}
              <div className="text-gray-500 text-sm" style={{ display: 'none' }}>{formatDate(item.createdAt)}</div>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold mb-4">{item.title}</h1>
          
          <div className="prose max-w-none">
            <p className="whitespace-pre-line">{item.content}</p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex space-x-4">
              {/* Link to the edit page using username */}
              <Link 
                href={`/items/edit/${item.username}`}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                수정하기
              </Link>
              {item.url && (
                <Link 
                  href={item.url}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer" // Added for security
                >
                  링크 열기
                </Link>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
} 