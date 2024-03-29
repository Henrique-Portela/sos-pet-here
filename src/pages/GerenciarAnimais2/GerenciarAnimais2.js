import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PetCard from '../../components/PetCard/PetCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom"

const GerenciarAnimais2 = () => {
  const [pet, setPet] = useState([])
  const [refresh, setRefresh] = useState(false)

  const apiUrl = 'https://ironrest.cyclic.app/sos_pet_here'

  useEffect(() => {
    axios.get(apiUrl)
        .then(response => {
            setPet([...response.data])
        })
        .catch(err => console.log(err))
}, [refresh])

   function deletePet(id) {
    axios.delete(`https://ironrest.cyclic.app/sos_pet_here/${id}`)
        .then(response => {
            setRefresh(!refresh)
        })
        .catch(err => console.log(err))
}

  return (
    <Container>
        <h1>Editar Informações do Pet</h1>
      <Row>
        {pet.length && pet.map((pet) => {
          return (
            <Col>
              <div key={pet._id}>
              <PetCard 
                name={pet.name}
                idade={pet.age}
                sexo={pet.gender}
                raca={pet.breed}
                img={pet.imageUrl}
                id={pet._id}
              />
                <div className="botoes">
                  <Link type="button" className="btn btn-info btn-sm" to={`/editarpet/${pet._id}/editar`}>Editar</Link>
                  <button  className="btn btn-danger btn-sm" onClick={() => deletePet(pet._id)}>Deletar</button>
                </div>
              </div>

            </Col>
            )
        })}
      </Row>
    </Container>
  )
} 
export default GerenciarAnimais2
