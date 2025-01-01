//Process Container Div
const processContainer = document.getElementsByClassName("box-container")[0];
const ratingContainer = document.getElementsByClassName("box-container")[1];
console.log(ratingContainer);

//
const star = () => `<svg width="15" height="15" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.03281 2.27141C9.8375 0.576198 12.1625 0.576195 12.9672 2.27141L14.3579 5.20118C14.6774 5.87435 15.2951 6.34094 16.0096 6.44888L19.1193 6.91869C20.9187 7.19053 21.6371 9.48954 20.3351 10.8091L18.0849 13.0896C17.5679 13.6136 17.332 14.3685 17.454 15.1084L17.9852 18.3285C18.2926 20.1918 16.4116 21.6126 14.8022 20.7329L12.0208 19.2126C11.3817 18.8633 10.6183 18.8633 9.97917 19.2126L7.19776 20.7329C5.58839 21.6126 3.70742 20.1918 4.01479 18.3286L4.54599 15.1084C4.66804 14.3685 4.43211 13.6136 3.91508 13.0896L1.66488 10.8091C0.362866 9.48954 1.08133 7.19053 2.88066 6.91869L5.99037 6.44888C6.70489 6.34094 7.32257 5.87435 7.64211 5.20118L9.03281 2.27141Z" fill="pink" stroke="" stroke-width="1.5" stroke-linejoin="round"/>
</svg>
`

const imageAligner = (src, text,person) => `
<div>
<div style="display:flex; gap:10px;margin-bottom:1rem; flex-direction:row;">
    ${star().repeat(4)}
</div>
<div style="display:flex; flex-direction:row; gap:10px;">
 <img style="border:1px solid pink;border-radius:40%;object-fit:contain" width=100 height=100 src=${src}/>
 <p style="max-width:150px;max-height:100px;color:black">${text}</p>
</div>
<h2 style="color:pink;font-size:17px;" class="poppins-bold">${person}</h2>
</div>
`



const phone =()=> `<div><svg class="phone-hover header-selected" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="M14.05 2a9 9 0 0 1 8 7.94"/><path d="M14.05 6A5 5 0 0 1 18 10"/></svg><h1 class="poppins-bold header-selected">Contact Us</h1><p class="header-selected">Get in touch with us and explain your goals</p></div>`
const up = () => `<div><svg class="up-hover header-selected" xmlns="http/www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-fading-arrow-up"><path d="M12 2a10 10 0 0 1 7.38 16.75"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/><path d="M2.5 8.875a10 10 0 0 0-.5 3"/><path d="M2.83 16a10 10 0 0 0 2.43 3.4"/><path d="M4.636 5.235a10 10 0 0 1 .891-.857"/><path d="M8.644 21.42a10 10 0 0 0 7.631-.38"/></svg><h1 class="poppins-bold header-selected">Boost Your Sales</h1><p class="header-selected">See your sales fly</p></div>`
const results = () => `<div><svg class="header-selected" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column-increasing"><path d="M13 17V9"/><path d="M18 17V5"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path class="" d="M8 17v-3"/></svg><h1 class="poppins-bold header-selected">Get Results</h1><p class="header-selected">Get consistent and noticeable results</p></div>`



function loadLogos() {
    //Process Container
    const firstChild = processContainer.firstElementChild;
    const lastChild = processContainer.lastElementChild;
    const secondChild = lastChild.previousElementSibling;
    firstChild.innerHTML += phone();
    secondChild.innerHTML += up();
    lastChild.innerHTML += results();
    //
    
//Rating Container
    const rFirstChild = ratingContainer.firstElementChild;
    rFirstChild.classList.add("rating-card");
    rFirstChild.innerHTML += imageAligner("../assets/rater-1.png", "''Very Decent and Skillfull marketing company''","Katia Kurz");
    const rLastChild = ratingContainer.lastElementChild;
    rLastChild.classList.add("rating-card");
    rLastChild.innerHTML+=imageAligner("../assets/rater-3.png","''Extremely decent and compromised company.''","Romeo Arts")
    const rSecondChild = rLastChild.previousElementSibling;
    rSecondChild.classList.add("rating-card");
    rSecondChild.innerHTML+=imageAligner("../assets/rater-2.png","''The thing I liked the most about the company is its quality performance''","Claire Becker")
    //
}
loadLogos();
