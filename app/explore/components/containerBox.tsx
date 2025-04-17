"use client"
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from 'react';
import { SmileIcon } from 'lucide-react';
import EmojiPicker from 'emoji-picker-react';
import { PaperPlaneIcon } from '@/icons';
import Link from 'next/link';
interface PostProps {
  username?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
 
}

export function ContainerBox({ username = "User", title = "Project Title", description = "Project description goes here", imageUrl = "/placeholder.jpg" }: PostProps) {
  const [showEmojiList, setShowEmojiList] = useState(false);
  const [selectedEmojis, setSelectedEmojis] = useState<string[]>([]);

  

  const handleEmojiClick = (emoji: string) => {
    setSelectedEmojis([...selectedEmojis, emoji]);
    setShowEmojiList(false);
  };

  return (
    // <div className=" border    border-gray-200 rounded-lg hover:shadow-lg transition-shadow h-fit w-100
    //  md:w-86  overflow-hidden">
    <div className="p-3 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow h-fit w-110 md:w-80 overflow-hidden   ">

      <div className="py-3 rounded-lg  ">
        <div className="flex flex-col items-start gap-2">

         <div className='flex flex-row justify-between items-center w-full  '>
          <Link href={'/#'}>
            <Avatar className="h-8 w-8 flex-shrink-0">
              <AvatarImage src={`https://github.com/${username}.png`} />
              <AvatarFallback>{username[0]}</AvatarFallback>
            </Avatar>
          </Link>
          <div className="flex items-center border border-gray-200 p-2 rounded-full">
              <span className="text-xs text-gray-400 mr-2">View on Posts</span>
              <PaperPlaneIcon className='w-4 h-4' />
            </div>
            </div>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{username}</p>

           

          </div>
        </div>

      </div>
      
      <div className="w-full relative">
        <Image
          src={imageUrl}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="px-4 py-3 space-y-2">
        <h3 className="font-semibold line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-gray-500 gap-2">
            <textarea 
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden"
              placeholder="Reply directly..."
              rows={1}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                target.style.height = target.scrollHeight + 'px';
              }}
            />
            <div className="relative flex-shrink-0">
              <button 
                onClick={() => setShowEmojiList(!showEmojiList)}
                className="hover:text-gray-900 p-1 rounded-full hover:bg-gray-100"
              >
                <SmileIcon className="w-5 h-5" />
              </button>
              {showEmojiList && (
                <div 
                  className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200"
                  style={{ zIndex: 9999 }}
                >
                  <EmojiPicker 
                    onEmojiClick={(emoji) => handleEmojiClick(emoji.emoji)}
                    width={320}
                    height={400}
                    previewConfig={{
                      showPreview: false
                    }}
                    searchDisabled
                    skinTonesDisabled
                  />
                </div>
              )}
            </div>
          </div>
          {selectedEmojis.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {selectedEmojis.map((emoji, index) => (
                <span key={index} className="text-xl">{emoji}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
