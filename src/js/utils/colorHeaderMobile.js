export default function colorHeaderMobile(header) {
  if (window.scrollY >= 45) {
    return header.classList.add('header_dark');
  } return header.classList.remove('header_dark');
}
