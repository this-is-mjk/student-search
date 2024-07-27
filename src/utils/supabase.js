import { createClient } from "@supabase/supabase-js"
const supabaseUrl = "https://xxnwqivqlhejfftikoki.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4bndxaXZxbGhlamZmdGlrb2tpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwMDQyMjIsImV4cCI6MjAzNzU4MDIyMn0.cQuyqk4BW9L02d2skdQxl4mRpky9GKn5fd3QOgC3nnQ"


// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or anon key.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
