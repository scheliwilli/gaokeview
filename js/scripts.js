// Basic interactions for sections, toggles, modal, carousel
document.addEventListener('DOMContentLoaded',function(){
  // camera toggle
  document.querySelectorAll('.toggle-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.toggle-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const target=btn.dataset.target;
      document.querySelectorAll('.panels-set').forEach(set=>{
        set.style.display = (set.id===target)?'flex':'none';
      });
    });
  });

  // open modal when clicking product thumb or table
  const modal=document.getElementById('product-modal');
  const openModal=()=>{ modal.setAttribute('aria-hidden','false'); };
  const closeModal=()=>{ modal.setAttribute('aria-hidden','true'); };

  document.querySelectorAll('.product-thumb, .product-table').forEach(el=>{
    el.addEventListener('click',openModal);
  });
  document.querySelector('.modal-close').addEventListener('click',closeModal);
  modal.addEventListener('click',(e)=>{ if(e.target===modal) closeModal(); });

  // carousel
  let idx=0; const slides=document.querySelectorAll('.frame-slide');
  function showSlide(i){ slides.forEach(s=>s.classList.remove('active')); slides[i].classList.add('active'); }
  document.querySelector('.carousel-nav.prev').addEventListener('click',()=>{ idx=(idx-1+slides.length)%slides.length; showSlide(idx); });
  document.querySelector('.carousel-nav.next').addEventListener('click',()=>{ idx=(idx+1)%slides.length; showSlide(idx); });

  // contact button scroll
  const contactBtn=document.querySelector('.btn-callback');
  if(contactBtn){ contactBtn.addEventListener('click',(e)=>{ e.preventDefault(); document.getElementById('contacts').scrollIntoView({behavior:'smooth'}); }); }

  // nav menu links - scroll to sections if anchor text matches
  document.querySelectorAll('.main-menu a').forEach(a=>{
    a.addEventListener('click',function(e){ e.preventDefault(); const txt=this.textContent.trim();
      let targetId='';
      if(/Технологии/i.test(txt)) targetId='technology';
      else if(/Документ/i.test(txt)) targetId='doc-cams';
      else if(/Интерактивн/i.test(txt)) targetId='panels';
      else if(/Цифров/i.test(txt)) targetId='digital-frames';
      if(targetId) document.getElementById(targetId).scrollIntoView({behavior:'smooth'});
    });
  });
});
