import Link from 'next/link';
import styles from './homepage.module.css';
import Image from 'next/image';
import WhyAfrilearn from './extra/whyAfrilearn';
import ExploreAfrilearn from './extra/exploreAfrilearn';

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div id="homepageFirstSection" className="row">
          <div className="col-md-6">
            <h1 className={styles.mainheading}>Get ahead with Afrilearn!</h1>
            <p className={styles.underHeadingP}> We provide every Primary and Secondary School Student
              freedom to learn complete curriculum-relevant subjects
              and topics anytime, anywhere.
            </p>
            <div className={`row ${styles.afterSubHeading}`}>
              <div className="col-md-4">
                <span className={styles.joinForFree}><Link passHref href='/'>JOIN FOR FREE</Link></span>
              </div>
              <div className="col-md-6">
                <span className={styles.experienceAfrilearn}><Image alt={"design image"} className={styles.experienceAfrilearnImg} src={'/assets/img/common/homepage/play-button-arrowhead 10.png'} width={15} height={15} /><Link passHref href='/'>Experience Afrilearn</Link></span>
              </div>
            </div>
          </div>
          <div className="col-md-6 center">
            <Image alt={"design image"} className={`centerImage ${styles.experienceAfrilearnImg}`} src={'/assets/img/common/homepage/73984-girl-studying-on-laptop (1).gif'} width={563} height={563} />
          </div>
        </div>
      </div>
      <WhyAfrilearn />
      <ExploreAfrilearn />
      <GameIntro />
      <CrossPlatform />
      <Testimonials />
      <Faq />
      <QuickJoin />
      <Partners />

      <Footer />
    </>
  )
}

const GameIntro = () => {
  const data = {
    title: "Games experience\nwith rewards.",
    description: ["Learn and play within Afrilearn platform"],
    imageURL: '/assets/img/common/homepage/school.png'

  }
  return (<>
    <div id="landingpage-games" className="row" style={{ margin: '93px' }}>

      <section className={`row ${styles.profiles}`}>
        <div className="col-md-6">
          <h3 className={styles.profilesh3}>{data?.title}<br className="desktopOnly" />{data?.titlePart2}</h3>
          {data?.description.map((item) => {
            return <p key={item}><span className={styles.bulletText}>{item}</span></p>
          })}
          <section className={`row`}>
            <div className={`row ${styles.afterSubHeading}`}>
              <div className="col-md-4">
                <span className={styles.joinForGames}><Link passHref href='/'>JOIN FOR FREE</Link></span>
              </div>
            </div>
          </section>
        </div>
        <div className={`col-md-6 ${styles.profileImagePosition}`}>
          <Image alt={"design image"} src={data?.imageURL} width={434} height={371} className={styles.profileImage} />
        </div>
      </section>
    </div>
  </>)
}
const CrossPlatform = () => {
  const data = {
    title: "Learn on any device.",
    description: ["Anywhere, everywhere. Cancel anytime."],
    imageURLs: ['/assets/img/common/homepage/cross-platform.svg']

  }
  return (<>
    <div id="landingpage-crossplatform" className={`row ${styles.crossPlatform}`} style={{ margin: '93px', display: 'block' }}>

      <section className={`row ${styles.profiles}`}>
        <div className={`col-md-6 ${styles.sectionImageContainer}`}>
          <Image alt={"design image"} src={data?.imageURLs[0]} width={'504.4px'} height={'375.01px'} />
        </div>
        <div className={`col-md-6 ${styles.crossPlatformTextPosition}`}>
          <h3>{data?.title}<br className="desktopOnly" />{data?.titlePart2}</h3>
          {data?.description.map((item) => {
            return <p key={item}><span className={styles.bulletText}>{item}</span></p>
          })}
          <section className={`row ${styles.mobileDownloadSection}`}>
            <div className="col-md-4">
              <Link passHref href="https://play.google.com/store/apps/details?id=com.afrilearn">
                <Image alt={"design image"} src='/assets/img/common/homepage/Google Play Badge.png' width={150} height={45} />
              </Link>
            </div>
            <div className="col-md-4">
              <Link passHref href="https://apps.apple.com/ng/app/afrilearn/id1587978653">
                <Image alt={"design image"} src='/assets/img/common/homepage/App Store Badge.png' width={150} height={45} />
              </Link>
            </div>
          </section>
        </div>
      </section>
    </div>
  </>)
}
const Testimonials = () => {
  const data = {
    title: "What people are saying about Afrilearn?",
    description: ["Our greatest advertisement are the\ntestimonials of successful learners!"],
    imageURLs: ['/assets/img/common/homepage/quoto-mark.svg',
      '/assets/img/common/homepage/group.svg'
    ]

  }
  return (<>
    <div id="landingpage-testimonials" className={`row ${styles.testimonials}`} style={{ margin: '93px' }}>
      <section className={styles.container}>
        <div className={`col-xl-6 col-lg-7 col-md-8 col-sm-9 ${styles.heroText}`}>
          <h1>{`${data.title}`}</h1>
        </div>
        {/* <div className='col-lg-7 '></div> */}
        <p>{`${data.description.at(0)}`}</p>
        <section className={`row`}>
          <div className={`col-md-12`}>
            <Image alt={"design image"} className={styles.mark} src={data?.imageURLs[0]} width={'142.37px'} height={'120px'} />
          </div>
        </section>
      </section>

      <div className={`row`}>

        <div className={`col-lg-12 ${styles.preview}`}>
          <Image alt={"design image"} src={data?.imageURLs[1]} width="445px" height="268px" />
        </div>
      </div>
    </div>

  </>)
}
const Faq = () => {
  const data = {
    title: "Frequently asked questions",
    questions: [
      "What is Afrilearn?",
      "What is included in Afrilearn subscription?",
      "How do I cancel?",
      "Where can I watch?"
    ],
    imageURL: ['/assets/img/common/homepage/faq.svg']
  }

  return (<>
    <div id="landingpage-faq" className={`row ${styles.faq}`} style={{ margin: '93px' }}>
      <h2>{data.title}</h2>
      <section>
        {data.questions.map((faq, i) => {

          return (
            <div
              key={i}
              onClick={(e) => console.log(`FAQ #${i + 1}: ${faq}`, e)}
              className={styles.faqHover}
              style={{ position: 'relative' }}
            >

              <span style={{
                position: 'absolute',
                zIndex: 1,
                top: '25%',
                left: '10px',
                fontSize: '18px',
                lineHeight: '25px',
                color: '#000000',
              }}>
                {faq}
              </span>
              <Image alt={"design image"} src={data?.imageURL[0]} width="500px" height="60px" />
            </div>
        )
        })}

      </section>
    </div>
  </>)
}
const QuickJoin = () => {
  const data = {
    title: "Ready for success?",
    description: [
      "Join the league of high-flying learners",
    ],
    courses: ["1", "2", "3"],
    imageURL: ['/assets/img/common/homepage/quick-join-classes.svg',
      '/assets/img/common/homepage/quick-join-button.svg']
  }

  return (<>
    <div id="landingpage-quickJoin" className={`row ${styles.quickJoin}`}>
      <h2>{data.title}</h2>
      <h6>{data.description}</h6>
      <section>
        <div
          onClick={(e) => console.log(`Quick join to class:`, e.target)}
          className={styles.container}

        >
          <span style={{
            position: 'absolute',
            zIndex: 1,
            top: '20%',
            left: '25%',
            fontSize: '18px',
            lineHeight: '25px',
            color: '#000000',
          }}>
            {'Select class'}
          </span>
          <div className={styles.quickJoinDropDown}>
            <Image alt={"design image"} src={data?.imageURL[0]} className={styles.classes} width="500px" height="50px" />
            <Image alt={"design image"} src={data?.imageURL[1]} className={styles.joinButton} width="200px" height="48px" />
          </div>
        </div>
      </section>
    </div>
  </>)
}
const Partners = () => {
  const data = {
    title: "Key Supporters",
    partners: [
      {
        position: 0,
        logoURL: '/assets/img/common/partners/1.svg',
        name: '',
      },
      {
        position: 0,
        logoURL: '/assets/img/common/partners/2.svg',
        name: '',
      },
      {
        position: 0,
        logoURL: '/assets/img/common/partners/3.svg',
        name: '',
      },
      {
        position: 0,
        logoURL: '/assets/img/common/partners/4.svg',
        name: '',
      },
      {
        position: 0,
        logoURL: '/assets/img/common/partners/5.svg',
        name: '',
      },
      {
        position: 0,
        logoURL: '/assets/img/common/partners/6.svg',
        name: '',
      },
      {
        position: 0,
        logoURL: '/assets/img/common/partners/7.svg',
        name: '',
      }
    ],

  }
  return (<>
    <div id="landingpage-partners" className={`row ${styles.partners}`}>
      <h2>{data.title}</h2>
      <section>
        {data.partners.map((partner, i) => {

          return (
              <div key={i} className={styles.box}>
                <Image alt={"design image"} className={styles.partnerLogo} src={partner.logoURL} layout={'fill'} />
              </div>
          )
        })}
      </section>
    </div>

  </>)
}
const Footer = () => {
  
  return (<>

<div id="landingpage-footer" className={`row ${styles.footer}`}>
      <section></section>

      <section className={styles.last}></section>
      </div>
  </>)
}

export default HomePage