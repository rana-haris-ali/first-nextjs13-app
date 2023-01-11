'use client';
import { Container, Heading, Input, VStack } from '@chakra-ui/react';

export default function Home() {
	return (
		<main>
			<VStack mt='5' spacing={10}>
				<Container maxW='4xl' centerContent>
					<Heading as='h1' color='#2C3639'>
						Welcome to my first nextjs app
					</Heading>
				</Container>
				<Container>
					<Input
						placeholder='Enter Github username'
						bg='white'
						variant='filled'
					/>
				</Container>
			</VStack>
		</main>
	);
}
