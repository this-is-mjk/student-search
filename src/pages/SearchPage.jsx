/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lwTgJ9A1VsB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
// import Link from "next/link"

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
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-card py-6 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 flex justify-center">
          <div className="relative w-full max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Enter name or roll number"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-muted border-input text-foreground focus:border-primary focus:ring-primary"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <ChevronDownIcon className="h-4 w-4 text-muted-foreground" />
                    <span>Filters</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onSelect={() => setGender("")}>All</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setGender("Male")}>Male</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setGender("Female")}>Female</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setGender("Other")}>Other</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setDepartment("")}>All</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setDepartment("CSE")}>CSE</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setDepartment("EE")}>EE</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setDepartment("MTH")}>MTH</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setDepartment("CE")}>CE</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setDepartment("CHE")}>CHE</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setDepartment("ECO")}>ECO</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setDepartment("MECH")}>MECH</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setDepartment("ES")}>ES</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setDepartment("SDS")}>SDS</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
            {filteredStudents.map((student) => (
              <div className="bg-card rounded-lg shadow-sm overflow-hidden transition-all duration-300 ease-in-out hover:bg-foreground hover:text-background hover:-translate-y-2 hover:shadow-lg animate-fade-in">
                {/* <Link href="#" className="block" prefetch={false}> */}
                  <img className="w-full h-32 object-cover group-hover:text-foreground" src="/placeholder.svg" />
                  <div className="p-3">
                    <h3 className="text-base font-bold text-foreground mb-1">{student.name}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <BookIcon className="h-4 w-4" />
                      <span>{student.department}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <BadgeIcon className="h-4 w-4" />
                      <span>{student.rollNumber}</span>
                    </div>
                  </div>
                {/* </Link> */}
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="bg-card py-6 shadow-sm animate-fade-in">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <p className="text-muted-foreground text-sm">&copy; 2024 Student Search. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            {/* <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
              Contact
            </Link> */}
          </nav>
        </div>
      </footer>
    </div>
  )
}

function BadgeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  )
}


function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}