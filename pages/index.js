import Head from "next/head"
import Image from "next/image"
import Card from "../components/Card"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { Container } from "../components/styles/Container.styled"
import content from "../DB/contents"
export default function Home() {
  return (
    <>
      <Header />
      <Container>
        {content.map((item, index) => (
          <Card item={item} />
        ))}
      </Container>
      <Footer />
    </>
  )
}
