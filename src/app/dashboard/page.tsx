"use client";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import { generateHTML } from "@tiptap/core";
import content from "@/components/tiptap-templates/simple/data/content.json";
import { useState } from "react";

export default function Page() {
  const [content, setContent] = useState("");
  return (
    <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
      <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
        <div className='bg-muted/50 aspect-video rounded-xl' />
        <div className='bg-muted/50 aspect-video rounded-xl' />
        <div className='bg-muted/50 aspect-video rounded-xl' />
      </div>
      <div className='bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min'>
        <SimpleEditor onChange={(data) => setContent(data)} />
      </div>
      <div
        className='bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min tiptap ProseMirror simple-editor'
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
