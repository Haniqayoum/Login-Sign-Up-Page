var container    = document.getElementById('container');
var overlayTitle = document.getElementById('overlayTitle');
var overlayText  = document.getElementById('overlayText');
var switchBtn    = document.getElementById('switchBtn');
var overlayContent = document.getElementById('overlayContent');

let isLogin = true;

function toggleMode() {
  isLogin = !isLogin;

  
  overlayContent.style.opacity = '0';
  overlayContent.style.transform = 'translateY(10px)';
  overlayContent.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

  if (isLogin) {
    container.classList.remove('signup-active');
    container.classList.add('login-active');
  } else {
    container.classList.remove('login-active');
    container.classList.add('signup-active');
  }

  // Update overlay text after slide
  setTimeout(() => {
    if (isLogin) {
      overlayTitle.textContent = 'New Here?';
      overlayText.textContent  = 'Join us today and unlock a world of possibilities. Create your free account in seconds!';
      switchBtn.textContent    = 'Sign Up';
    } else {
      overlayTitle.textContent = 'Welcome Back!';
      overlayText.textContent  = 'Already have an account? Sign in to pick up right where you left off.';
      switchBtn.textContent    = 'Sign In';
    }
    overlayContent.style.opacity = '1';
    overlayContent.style.transform = 'translateY(0)';
  }, 400);
}
document.querySelectorAll('.form-group input').forEach(input => {
  input.addEventListener('focus', function () {
    this.parentElement.parentElement.style.transform = 'scale(1.01)';
    this.parentElement.parentElement.style.transition = 'transform 0.3s ease';
  });
  input.addEventListener('blur', function () {
    this.parentElement.parentElement.style.transform = 'scale(1)';
  });
});
document.querySelectorAll('.submit-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255,255,255,0.3);
      width: 20px; height: 20px;
      top: ${e.offsetY - 10}px;
      left: ${e.offsetX - 10}px;
      animation: rippleOut 0.6s ease forwards;
      pointer-events: none;
    `;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
    this.textContent = '✓ Success!';
    this.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
    setTimeout(() => {
      this.textContent = this.closest('.login-panel') ? 'Sign In' : 'Create Account';
      this.style.background = '';
    }, 1500);
  });
});
const style = document.createElement('style');
style.textContent = `
  @keyframes rippleOut {
    to { transform: scale(15); opacity: 0; }
  }
`;
document.head.appendChild(style);


function sign(){
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-pass").value;

    var storage = JSON.parse(localStorage.getItem("data")) || [];

    var data = {
        email: email,
        password: password
    };

    storage.push(data);

    localStorage.setItem("data", JSON.stringify(storage));

    console.log("Saved:", data);
}

function create(){
    var name = document.getElementById("name").value;
    var password = document.getElementById("create-pass").value;

    var storage = JSON.parse(localStorage.getItem("storage")) || [];

    var data = {
        name: name,
        password: password
    };

    storage.push(data);

    localStorage.setItem("storage", JSON.stringify(storage));

    console.log("Saved:", data);
}