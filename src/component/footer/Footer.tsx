'use client'
import styles from './Footer.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { usePathname } from 'next/navigation';
export default  function Footer() {
const pathname=usePathname();
  return (
    <footer>
    <section className={styles.footer} style={pathname==="/contact"||"/picture"||"/videos"?{display:"none"}:{display:"flex"}}>
        <a href="#" className={` ${styles.karwaan}`} style={{textDecoration:"none",color:"black"}}>Karwaan Films Private Limited</a>
      
        <div className={styles.socialIcons}>
           {/* <a href="#" className={styles.linkText}>
            <TwitterIcon/>
          </a> */}
      
          <a href="https://www.linkedin.com/company/karwaanfilms/" target="_blank" className={styles.linkText}>
            <LinkedInIcon/>
          </a>
      
          <a href="https://instagram.com/karwaan.films"target="_blank" className={styles.linkText}>
            <InstagramIcon/>
          </a>
      
          <a href="https://wa.me/919899009001" target="_blank" className={styles.linkText}>
            <WhatsAppIcon/>
          </a>
        </div>
    </section>
</footer>
  )
}