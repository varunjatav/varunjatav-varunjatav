import React from 'react'
import Project1 from '../Project1'
import Project2 from '../Project2'
import project4 from '../project4'
import './project.css'


import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'


export default function Project() {
  return (
    <div id="projects" class="nav-link projects">
     <h1  className='projectHead'>Projects</h1>
    <Card 
    class="project-card" 
  direction={{ base: 'column', sm: 'row' }}
  // className='card'
  overflow='hidden'
  variant='outline'
 
  
>
  <Image
    objectFit='fit-content'
    className='img'
    src={Project1}
    alt='Project1'
    borderRadius={'2rem'}
  />

  <Stack padding={'5%'}>
    <CardBody>
      <Heading class="project-title" textAlign={['left','center']} className='head'>kindmeal.my</Heading>

      <Text class="project-description" className='txt' textAlign={['left','center']} py='2'>
              KindMeal attempts this by closely working with restaurants and
              cafes to offer attractive meat-free deals and cozy dining
              environments.
      </Text>

      <Heading  class="project-title" textAlign={['left','center']} className='head'>Tech Stack</Heading>

      <Text class="project-tech-stack" className='txt' textAlign={['left','center']} py='2'>
      React.js | Chakra ui | React Bootstrap
      </Text>
    </CardBody>

    <CardFooter justifyContent={"center"} gap={"50%"}>
     <a class="project-github-link" href="https://github.com/Varun-98-masai/RCT-101-kindmeal.my/tree/day-01"> <Button  fontSize={'1.2rem'} bgColor='red' borderRadius={'10%'} padding={'10px'}>
        Github
      </Button></a>
      <a class="project-deployed-link" href="https://glittering-lamington-f3f69e.netlify.app/"><Button fontSize={'1.2rem'} bgColor='red' borderRadius={'10%'} padding={'10px'}>
        Netlify
      </Button></a>
    </CardFooter>
  </Stack>
</Card>

<Card
 class="project-card" 
  direction={{ base: 'column', sm: 'row' }}
 
  overflow='hidden'
  variant='outline'

  
>
  <Image
    objectFit='fit-content'
    className='img'
    src={project4}
    alt='Project4'
    borderRadius={'2rem'}
  />

  <Stack padding={'5%'}>
    <CardBody>
      <Heading class="project-title" textAlign={['left','center']} className='head' >Blackpearl</Heading>

      <Text class="project-description" className='txt' textAlign={['left','center']} py='2'>
              Blackpearl is a clone project of caratlane which is a E-commerce website
              which deals with Jwellery. It is a collaborative project with 5 members.
      </Text>

      <Heading  class="project-title" textAlign={['left','center']} className='head'>Tech Stack</Heading>

      <Text class="project-tech-stack" className='txt' textAlign={['left','center']} py='2'>
      React Redux | Chakra ui | Fire Base- auth
      </Text>
    </CardBody>

    <CardFooter justifyContent={"center"} gap={"50%"}>
     <a class="project-github-link" href="https://github.com/nikhildeora/black-pearl"> <Button fontSize={'1.2rem'} bgColor='red' borderRadius={'10%'} padding={'10px'}>
        Github
      </Button></a>
      <a  class="project-deployed-link"  href="https://startling-tulumba-8a76b2.netlify.app/"><Button fontSize={'1.2rem'} bgColor='red' borderRadius={'10%'} padding={'10px'}>
        Netlify
      </Button></a>
    </CardFooter>
  </Stack>
</Card>


<Card
class="project-card" 
  direction={{ base: 'column', sm: 'row' }}
  
  overflow='hidden'
  variant='outline'

>
  <Image
    objectFit='fit-content'
    className='img'
    src={Project2}
    alt='Project2'
    borderRadius={'2rem'}
  />

  <Stack padding={'5%'}>
    <CardBody>
      <Heading class="project-title" textAlign={['left','center']} className='head'>NiftyPM</Heading>

      <Text class="project-description" className='txt' textAlign={['left','center']} py='2'>
             Nifty is the remote collaboration hub to manage projects, tasks, and
             communications — all in one place. Remote work has never been
             easier, fun, and more
      </Text>

      <Heading  class="project-title" textAlign={['left','center']} className='head'>Tech Stack</Heading>

      <Text class="project-tech-stack" className='txt' textAlign={['left','center']} py='2'>
      HTML | CSS | Javascript
      </Text>
    </CardBody>

    <CardFooter justifyContent={"center"} gap={"50%"}>
     <a class="project-github-link" href="https://github.com/piyush-agrawal6/NiftyPM-clone"> <Button fontSize={'1.2rem'} bgColor='red' borderRadius={'10%'} padding={'10px'}>
        Github
      </Button></a>
      <a  class="project-deployed-link" href="http://nifty-pm.netlify.app/"><Button fontSize={'1.2rem'} bgColor='red' borderRadius={'10%'} padding={'10px'}>
        Netlify
      </Button></a>
    </CardFooter>
  </Stack>
</Card>

<Card
 class="project-card" 
  direction={{ base: 'column', sm: 'row' }}
  
  overflow='hidden'
  variant='outline'

>
  <Image
    objectFit='fit-content'
    className='img'
    src={Project2}
    alt='Project2'
    borderRadius={'2rem'}
  />

  <Stack padding={'5%'}>
    <CardBody>
      <Heading class="project-title" textAlign={['left','center']} className='head'>NiftyPM</Heading>

      <Text class="project-description"  textAlign={['left','center']} py='2'>
             Nifty is the remote collaboration hub to manage projects, tasks, and
             communications — all in one place. Remote work has never been
             easier, fun, and more
      </Text>

      <Heading  class="project-title" textAlign={['left','center']} className='head'>Tech Stack</Heading>

      <Text class="project-tech-stack" className='txt' textAlign={['left','center']} py='2'>
      HTML | CSS | Javascript
      </Text>
    </CardBody>

    <CardFooter justifyContent={"center"} gap={"50%"}>
     <a class="project-github-link" href="https://github.com/piyush-agrawal6/NiftyPM-clone"> <Button fontSize={'1.2rem'} bgColor='red' borderRadius={'10%'} padding={'10px'}>
        Github
      </Button></a>
      <a  class="project-deployed-link" href="http://nifty-pm.netlify.app/"><Button fontSize={'1.2rem'} bgColor='red' borderRadius={'10%'} padding={'10px'}>
        Netlify
      </Button></a>
    </CardFooter>
  </Stack>
</Card>
</div>
  );
};