/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lwTgJ9A1VsB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import Card from "@/components/student-card"
import { useState, useMemo } from "react"

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [gender, setGender] = useState("")
  const [department, setDepartment] = useState("")


  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      rollNumber: "2301001",
      gender: "Male",
      department: "CSE",
      image: "/placeholder-user.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      rollNumber: "2301002",
      gender: "Female",
      department: "EE",
      image: "/placeholder-user.jpg",
    },
    {
      id: 3,
      name: "Alex Johnson",
      rollNumber: "2301003",
      gender: "Male",
      department: "MTH",
      image: "/placeholder-user.jpg",
    },
    {
      id: 4,
      name: "Emily Davis",
      rollNumber: "2301004",
      gender: "Female",
      department: "CE",
      image: "/placeholder-user.jpg",
    },
    {
      id: 5,
      name: "Michael Brown",
      rollNumber: "2301005",
      gender: "Male",
      department: "CHE",
      image: "/placeholder-user.jpg",
    },
    {
      id: 6,
      name: "Sarah Wilson",
      rollNumber: "2301006",
      gender: "Female",
      department: "ECO",
      image: "/placeholder-user.jpg",
    },
    {
      id: 7,
      name: "David Thompson",
      rollNumber: "2301007",
      gender: "Male",
      department: "MECH",
      image: "/placeholder-user.jpg",
    },
    {
      id: 8,
      name: "Jessica Anderson",
      rollNumber: "2301008",
      gender: "Female",
      department: "ES",
      image: "/placeholder-user.jpg",
    },
    {
      id: 9,
      name: "Christopher Martinez",
      rollNumber: "2301009",
      gender: "Male",
      department: "SDS",
      image: "/placeholder-user.jpg",
    },
  ])

  // fetch code here

  // useEffect(() => {
  //   localStorage.setItem('items', JSON.stringify(students));
  // }, [students]);


  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const nameMatch = student.name.toLowerCase().includes(searchTerm.toLowerCase())
      const rollNumberMatch = student.rollNumber.includes(searchTerm)
      const genderMatch = gender ? student.gender === gender : true
      const departmentMatch = department ? student.department === department : true
      return nameMatch || (rollNumberMatch && genderMatch && departmentMatch)
    })
  }, [students, searchTerm, gender, department])
  return (
    <div className="flex flex-col min-h-screen bg-background border-none">
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 animate-fade-in">
            {filteredStudents.map((student) => (
              <Card key={student.id} user={student} />
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

