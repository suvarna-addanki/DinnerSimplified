import React from 'react'
import { Col } from 'react-bootstrap'

function Search({handleSubmit, setSearch}) {
  return (
    <Col xs={12} md={8} >
    <form onSubmit={handleSubmit} className="ui large fluid icon input p-5">
  <input
    type="text"
    placeholder="Search main ingredient"
    onChange={(e)=>{setSearch(e.target.value)}}
  />
  <i className="circular search link icon"></i>
</form>

    </Col>
  )
}

export default Search