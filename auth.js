let signupEmail = document.getElementById('email')
let signupPass = document.getElementById('password')
let signupBtn = document.getElementById('signup-btn')
let loginEmail = document.getElementById('loginEmail')
let loginPass = document.getElementById('loginPassword')
let loginBtn = document.getElementById('login_btn')
let logoutBtn = document.getElementById('logout_btn')






async function signup() {
    try {
      const { data, error } = await supabase.auth.signUp({
          email: signupEmail.value,
          password: signupPass.value,

          
          
        })
  
      if(error) throw error 
      if(data) {
          alert('Please Check your email for confirmation')
     window.location.href = '/login.html'

      }
      return data
    } catch (error) {
      console.log(error)
    } finally {
  
    }
        
  }

  async function login() {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: loginEmail.value,
            password: loginPass.value,
          })

          if(error) throw error
          if(data) {
            console.log(data)
            alert('Sign in Succesfull')

              window.location.href = '/dashboard.html'
          }
          return data
    } catch (error) {
            console.log(error)

            alert(error.message)
    }
}

async function logout() {
    try {
        const { error } = await supabase.auth.signOut()
        if(error) throw error

        window.location.href = '/login.html'
    } catch (error) {
    console.log(error)        
    }
}



  if(signupBtn) {
    signupBtn.addEventListener('click' , signup)
  }

  if(loginBtn) {
    loginBtn.addEventListener('click' , login)}

    if(logoutBtn) {
        logoutBtn.addEventListener('click' , logout)
      
      }
