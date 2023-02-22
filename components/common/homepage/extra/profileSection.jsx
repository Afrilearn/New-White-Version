import styles from '../homepage.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { BsCheck2All, BsPlayCircleFill } from 'react-icons/bs'
import { BiCheckCircle} from 'react-icons/bi';

const ProfileSection = ({data}) => {
   return (     
      <section className={`row other-style-added ${styles.profiles} `}>
        <div className={`${styles.detailswrapper} col-md-6`}>
          <h3 className={styles.profilesh3}>{data?.title}<br className="desktopOnly"/>{data?.titlePart2}</h3>
          {data?.description.map((item)=>{
            return <p key={item}>
              <BiCheckCircle
              size={20}
               />
              <span className={styles.bulletText}>{item}</span></p>
          })}        
           <div className={styles.joinForFree}>
                    <BsPlayCircleFill size={35} color={"#00d9b6"} className={styles.iconCircleWrapper}/> 
                    <Link 
                      className={styles.linkIconWrapper}
                    passHref href="/register">
                      JOIN FOR FREE
                    </Link>
                </div>
          <div className={styles.afterOneSubHeading_button}>
                <div className={styles.appIconsWrapper}>
                  <a passHref href="/register">
                      <Image 
                        src='/assets/img/app-store.svg'
                        alt="Apple store logo"
                        width={"1%"}
                        height={"1%"}
                      />
                    </a>
                </div>
                <div className={styles.appIconsPlayWrapper}>
                  <a passHref href="https://play.google.com/store/apps/details?id=com.afrilearn">
                    <Image 
                      src='/assets/img/app-store.svg'
                      alt="Apple store logo"
                      width={"1%"}
                      height={"1%"}
                    />
                  </a>
                </div>
              </div>
        </div>
        <div className={`col-md-6 ${styles.profileImagePosition}`}>
          <Image alt={"design image"} src={data?.imageURL} width={434} height={371}/> 
        </div>
      </section>  
  )
}

export default ProfileSection
