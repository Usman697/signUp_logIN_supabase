const {createClient} = supabase
const supabaseUrl = 'https://ndkuyqfrohzlztcvvopo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ka3V5cWZyb2h6bHp0Y3Z2b3BvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2Njc1MzUsImV4cCI6MjA1MjI0MzUzNX0.SOeKEkI6Ndv7S1bS9igABVmRjm81w-nk7IpEkUAtYAA'
const supabaseClient = createClient(supabaseUrl, supabaseKey)


window.supabase = supabaseClient