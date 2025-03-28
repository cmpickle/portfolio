import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Text, YStack, XStack, Image } from 'tamagui';
const CompanyComponent = (props) => {
  const { company, classes, children } = props;
  return (
    <YStack margin={20} maxWidth={1000} backgroundColor='#424242'>
      <YStack backgroundColor='white' padding={20}>
        {company.image ? (
          <Image source={{ uri: company.image, height: 200, width: 800 }} alt={company.name} objectFit='contain' backgroundColor='white' backgroundSize='contain' />
          // <img
          //   src={company.image}
          //   alt={company.name}
          //   maxWidth='90vw'
          //   maxHeight={200}
          //   objectFit='contain'
          //   backgroundColor='white'
          // />
        ) : (
          <Text variant='h2' color='black' paddingVertical={60} fontSize={'3.75rem'}>
            {company.label}
          </Text>
        )}
      </YStack>
      <YStack padding={20}>
        <Text variant='h4' whiteSpace='pre-wrap' textAlign='initial' display='block'>
          {company.name}
        </Text>
        <Text  whiteSpace='pre-wrap' textAlign='initial' color='#09f' display='block'>
          {company.position} {company.timeline}
        </Text>
        <Text  whiteSpace='pre-wrap' textAlign='initial' display='block'>
          {company.technology}
        </Text>
        <Text  whiteSpace='pre-wrap' textAlign='initial' display='block'>
          {company.description}
        </Text >
        <XStack>
        {company.flairs &&
          company.flairs.map((flair, i) => (
            <a
              key={i}
              href={flair.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={flair.path} alt={flair.alt} width={100} height={100} margin={20} border='5px solid #08F' borderRadius={'15%'} backgroundColor='#FFF' />
            </a>
          ))}
      </XStack>
      </YStack>
      {children}
    </YStack>
  );
};

const styles = {
  label: {
    color: '#000000',
    padding: '60px 0px',
  },
  image: {
    maxWidth: '90vw',
    maxHeight: '200px',
    objectFit: 'contain',
    backgroundColor: '#FFFFFF',
  },
  content: {
    whiteSpace: 'pre-wrap',
    textAlign: 'initial',
  },
  roleStyle: {
    color: '#09f',
  },
  card: {
    margin: '20px',
    maxWidth: '1000px',
  },
  textArea: {
    padding: '20px',
  },
  imageBackground: {
    backgroundColor: 'white',
    padding: '20px',
  },
  flair: {
    width: '100px',
    height: '100px',
    margin: '20px',
    border: '5px solid #08F',
    objectFit: 'contain',
    borderRadius: '15%',
    backgroundColor: '#FFF',
  },
};

export const Company = CompanyComponent;
