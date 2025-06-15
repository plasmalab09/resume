// DOM 요소 선택
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const heroStatNumbers = document.querySelectorAll('.hero-stats .stat-number');
const contactForm = document.getElementById('contact-form');
const sections = document.querySelectorAll('section');

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
  // 초기 실행 함수들
  setupNavbar();
  setupAnimations();
  setupContactForm();
});

// 네비게이션 바 설정
function setupNavbar() {
  // 스크롤 이벤트 리스너
  window.addEventListener('scroll', () => {
    // 스크롤 위치에 따라 navbar 스타일 변경
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // 현재 보이는 섹션에 따라 활성 링크 업데이트
    updateActiveNavLink();
  });
  
  // 햄버거 메뉴 토글
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  
  // 네비게이션 링크 클릭 시 모바일 메뉴 닫기
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// 현재 보이는 섹션에 따라 활성 네비게이션 링크 업데이트
function updateActiveNavLink() {
  const scrollPosition = window.scrollY + 200; // 오프셋 추가
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // 이전 활성 링크에서 active 클래스 제거
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      
      // 현재 섹션에 해당하는 링크에 active 클래스 추가
      const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}

// 애니메이션 설정
function setupAnimations() {
  // 히어로 섹션 통계 숫자 카운터 애니메이션 실행
  animateHeroStatCounters();
  
  // 인터섹션 옵저버를 사용하여 요소가 화면에 나타날 때 애니메이션 적용
  setupScrollAnimations();
}

// 히어로 섹션 통계 숫자 카운터 애니메이션
function animateHeroStatCounters() {
  if (isElementInViewport(document.querySelector('.hero-stats'))) {
    heroStatNumbers.forEach(counter => {
      animateCounter(counter);
    });
  } else {
    // 히어로 섹션이 보이지 않는 경우 스크롤 이벤트에 리스너 추가
    const heroStatsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          heroStatNumbers.forEach(counter => {
            animateCounter(counter);
          });
          heroStatsObserver.disconnect(); // 한 번만 실행
        }
      });
    }, { threshold: 0.5 });
    
    const heroStatsElement = document.querySelector('.hero-stats');
    if (heroStatsElement) {
      heroStatsObserver.observe(heroStatsElement);
    }
  }
}

// 단일 카운터 애니메이션 (data-target 속성이 있는 요소만)
function animateCounter(counter) {
  const target = parseInt(counter.getAttribute('data-target'));
  
  // data-target 속성이 없거나 유효하지 않으면 애니메이션 실행하지 않음
  if (!target || isNaN(target)) {
    return;
  }
  
  const duration = 2000; // ms
  const stepTime = 50; // ms
  const totalSteps = duration / stepTime;
  const stepSize = target / totalSteps;
  let current = 0;
  
  const timer = setInterval(() => {
    current += stepSize;
    if (current > target) {
      counter.textContent = target;
      clearInterval(timer);
    } else {
      counter.textContent = Math.floor(current);
    }
  }, stepTime);
}

// 스크롤 애니메이션 설정
function setupScrollAnimations() {
  // 요소가 화면에 나타날 때 애니메이션 적용을 위한 인터섹션 옵저버
  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        animationObserver.unobserve(entry.target); // 한 번만 애니메이션 적용
      }
    });
  }, { threshold: 0.15 });
  
  // 애니메이션을 적용할 요소들
  const animatedElements = [
    ...document.querySelectorAll('.section-header'),
    ...document.querySelectorAll('.education-item'),
    ...document.querySelectorAll('.timeline-item'),
    ...document.querySelectorAll('.skill-category'),
    ...document.querySelectorAll('.research-stat'),
    ...document.querySelectorAll('.research-area'),
    ...document.querySelectorAll('.contact-item')
  ];
  
  // contact-form 요소 추가 (존재하는 경우)
  const contactFormElement = document.querySelector('.contact-form');
  if (contactFormElement) {
    animatedElements.push(contactFormElement);
  }
  
  // 요소들을 옵저버에 등록
  animatedElements.forEach(element => {
    if (element) {
      animationObserver.observe(element);
    }
  });
}

// 요소가 화면에 보이는지 확인
function isElementInViewport(element) {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// 연락처 폼 설정
function setupContactForm() {
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      // 폼 검증
      if (validateForm()) {
        // 실제 서버로 데이터를 보내는 로직이 여기에 들어갈 것입니다.
        // 현재는 깃허브 페이지에서 백엔드 서버 없이 동작하는 데모이므로,
        // 성공 메시지를 표시하고 폼을 초기화합니다.
        showFormSuccess();
        contactForm.reset();
      }
    });
  }
}

// 폼 검증
function validateForm() {
  let isValid = true;
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  
  // 기존 에러 메시지 제거
  clearFormErrors();
  
  // 입력 필드 검증
  if (!nameInput.value.trim()) {
    markInvalid(nameInput, '이름을 입력해주세요');
    isValid = false;
  } else {
    markValid(nameInput);
  }
  
  if (!emailInput.value.trim()) {
    markInvalid(emailInput, '이메일을 입력해주세요');
    isValid = false;
  } else if (!isValidEmail(emailInput.value)) {
    markInvalid(emailInput, '유효한 이메일을 입력해주세요');
    isValid = false;
  } else {
    markValid(emailInput);
  }
  
  if (!subjectInput.value.trim()) {
    markInvalid(subjectInput, '제목을 입력해주세요');
    isValid = false;
  } else {
    markValid(subjectInput);
  }
  
  if (!messageInput.value.trim()) {
    markInvalid(messageInput, '메시지를 입력해주세요');
    isValid = false;
  } else {
    markValid(messageInput);
  }
  
  return isValid;
}

// 폼 에러 메시지 모두 제거
function clearFormErrors() {
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(error => error.remove());
  
  const invalidInputs = document.querySelectorAll('.form-control.invalid');
  invalidInputs.forEach(input => input.classList.remove('invalid'));
}

// 이메일 형식 검증
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 입력 필드를 유효하지 않음으로 표시
function markInvalid(input, message) {
  input.classList.add('invalid');
  
  // 에러 메시지 요소 생성
  const errorElement = document.createElement('div');
  errorElement.className = 'error-message';
  errorElement.textContent = message;
  
  // 에러 메시지를 input 다음에 삽입
  input.parentNode.insertBefore(errorElement, input.nextSibling);
}

// 입력 필드를 유효함으로 표시
function markValid(input) {
  input.classList.remove('invalid');
}

// 폼 제출 성공 메시지 표시
function showFormSuccess() {
  // 기존 성공 메시지 요소가 있으면 제거
  const existingSuccess = document.querySelector('.form-success');
  if (existingSuccess) {
    existingSuccess.remove();
  }
  
  // 성공 메시지 요소 생성 및 추가
  const successElement = document.createElement('div');
  successElement.className = 'form-success';
  successElement.innerHTML = `
    <div style="background: var(--color-success); color: white; padding: var(--space-12) var(--space-16); border-radius: var(--radius-base); margin-top: var(--space-16); text-align: center;">
      ✓ 메시지가 성공적으로 전송되었습니다.
    </div>
  `;
  
  contactForm.appendChild(successElement);
  
  // 5초 후 성공 메시지 제거
  setTimeout(() => {
    if (successElement.parentNode) {
      successElement.remove();
    }
  }, 5000);
}

// 스크롤 내비게이션 (부드러운 스크롤)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      // 모바일 메뉴가 열려있으면 닫기
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      
      window.scrollTo({
        top: targetElement.offsetTop - 80, // 네비게이션 바 높이 보정
        behavior: 'smooth'
      });
    }
  });
});

// 페이지가 완전히 로드된 후 히어로 섹션 애니메이션 실행
window.addEventListener('load', () => {
  // 히어로 섹션이 보이면 바로 카운터 애니메이션 실행
  setTimeout(() => {
    animateHeroStatCounters();
  }, 500);
});