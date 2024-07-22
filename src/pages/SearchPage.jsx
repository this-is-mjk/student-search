/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lwTgJ9A1VsB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import Card from "@/components/student-card"
import { useState, useMemo } from "react"

export default function SearchPage({students}) {
  console.log(students)
  return (
    <div className="flex flex-col min-h-screen bg-background border-none">
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 animate-fade-in">
          {students.map((student) => (
              <div key={student.id} className="grid-item">
                <Card user={student} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className=" py-6 shadow-sm animate-fade-in">
          <p className="text-muted-foreground text-sm">&copy; 2024 <a style={{fontStyle: "italic"}} href="https://pclub.in/">Programming Club</a>. All rights reserved.</p>
          <p className="text-muted-foreground text-sm">Search Your seniors <a style={{fontStyle: "italic"}} href="https://search.pclub.in/">here</a> </p>

      </footer>
    </div>
  )
}

