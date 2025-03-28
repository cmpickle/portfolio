import { Image } from '@tamagui/image-next'
import { Text, YStack, Image } from 'tamagui'
import { Link } from 'one'
import { ToggleThemeButton } from '~/interface/ToggleThemeButton'
import oneBall from '~/app-icon.png'
import { version } from 'react'
import { Banner } from '../src/Banner'
import companies from '../src/work.json';
import profile from '../src/assets/images/profile.webp';
import { Company } from '../src/components/Company';

export function HomePage() {
  const bannerContent = () => (
  <>
    <YStack height='100vh' justifyContent='center' alignItems='center'>
      <YStack height='10vh'></YStack>
      <YStack width='fit-content' borderRadius='400px' backdropFilter='blur(5px) saturate(180%)' backgroundColor='rgba(0, 153, 255, 0.4)' width={'60vw'} height={400} justifyContent='center' alignItems='center'>
        <Image source={{ uri: profile, width: 200, height: 200 }} alt='Profile' borderRadius='100px' borderWidth={4} borderColor='#09f' />
        <Text color='textPrimary' variant='subtitle1'>Hello, I'm</Text>
        <Text color='textPrimary' variant='h1' fontSize={'6rem'}>Cameron Pickle</Text>
      </YStack>
    </YStack>
    <header>
      <Company
        key={100}
        company={{
          id: 100,
          label: 'About Me',
          description:
            "For me, Software Engineering is a way of life.\n\nOriginally I planned on being an Electrical Engineer but quickly found that I was obsessed with Software and the problems that I could solve with it (Although I still do enjoy some good hardware work now and again). I began my journey in the software world writing C++ to control Arduinos and was enveloped by the thrill of getting it do what I wanted. I went from the guy who had never written code before to the top of the class because I loved spending time writing code!\n\nI have a passion for constantly learning and stretching myself. I love that software engineering is like a constantly evolving puzzle that I get to learn and adapt to in order to make cool new things faster and with higher quality. I enjoy learning about code, learning best practices, and learning new coding tools. My only complaint is that there isn't enough time in the day to learn everything that I want to!\n\nI started out with Java and C# and ended up enjoying the Microsoft world. I learned about design patterns and became obsessed with writing clean, scalable, and maintainable code. After a while I fell into the world of web development learning Angularjs and React. I took a heavy liking to React and started to learn Go. I then learned about DevOps where I have set up robust scalable deploy processes using docker and Kubernetes and dove into big data with messaging in Kafka and searching with Elastic Search as I continued to branch out and explore the fascinating world of software development. I have worked across many industries including enterprise content management, planning, contact center, automotive, advertising, financial, and dance. I also tend to have a bad habit of becoming the leader of all the teams I work with.\n\nAt home when I am not wake surfing, 3D Printing, automating my home, or reading I like to get in some more coding. I have worked on many personal projects and side projects over the years. I have had fun making Android apps and games, Unity games, scripts and utilities for my personal life and for my family, and as some of my side projects I have built a full dance payment and registration system and a financial advisor lead generator and distributor software.",
          flairs: [
            {
              path: 'assets/images/tech/github.webp',
              alt: 'Github',
              link: 'https://github.com/cmpickle',
            },
            {
              path: 'assets/images/tech/stack-overflow.webp',
              alt: 'Stack Overflow',
              link: 'https://stackoverflow.com/users/1758235/cmpickle',
            },
            {
              path: 'assets/images/tech/linkedin.webp',
              alt: 'LinkedIn',
              link: 'https://www.linkedin.com/in/cameronpickle/',
            },
          ],
        }}
      >
        <a
          href='https://stackoverflow.com/users/1758235/cmpickle'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src='https://stackoverflow.com/users/flair/1758235.png?theme=dark'
            width='208'
            height='58'
            alt='profile for cmpickle at Stack Overflow, Q&amp;A for professional and enthusiast programmers'
            title='profile for cmpickle at Stack Overflow, Q&amp;A for professional and enthusiast programmers'
            style={{
              border: '5px solid rgb(0, 136, 255)',
              borderRadius: '5px',
              margin: '40px',
            }}
          ></img>
        </a>
      </Company>
      {companies.companies.map((c) => (
        <Company key={c.id} company={c} />
      ))}
    </header>
    {/* <Navbar /> */}
  </>
);
return (
  <div>
    <Banner component={bannerContent}></Banner>
  </div>
);
};

export function HomePage2() {
  return (
    <YStack bg="$color1" minH="100%" gap="$4" px="$4" items="center" justify="center" flex={1}>
      <Text fontSize="$8" text="center">
        Hello, One
      </Text>

      <Image src={oneBall} width={128} height={128} />

      <YStack items="center" gap="$6">
        <Text fontSize="$5" lineHeight="$5" text="center" color="$color11">
          Edit <Text>app/index.tsx</Text> to change this screen and then come back to see your
          edits.
        </Text>
        <Text fontSize="$5" lineHeight="$5" text="center" color="$color11">
          Read{' '}
          <Link href="https://onestack.dev/docs/introduction">
            <Text color="$yellow10" $platform-web={{ fontSize: 'inherit' }}>
              the docs
            </Text>
          </Link>{' '}
          to discover what to do next.
        </Text>

        <Text fontSize="$5" lineHeight="$5" text="center" color="$color11">
          React version: {version}
        </Text>

        <ToggleThemeButton />
      </YStack>
    </YStack>
  )
}
