import './App.css'
import * as React from 'react'
import logo from '../src/success.gif'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Pricing, features } from './Pricing'

export default function OutlinedCard (props) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    bgcolor: '#fff',
    color: '#000',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  }

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className='container'>
      <div className='details'>
        <h1> {props.title} </h1>
        <p style={{ color: '#c5cae9' }}> {props.content} </p>
      </div>
      <div className='card-components'>
        <Card className='card' variant='contained' style={{ backgroundColor: '#6200ee', color: '#feeae6' }}>
          <CardContent>
            <div className='pay'>
              <Typography sx={{ fontSize: 14 }} style={{ color: '#f9aa33' }} gutterBottom>
                {props.price}
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                <h1 style={{ color: '#b9e4c9' }}> {props.amount} <span> month</span> </h1>
                <p style={{ color: 'rgba(242, 237, 236, 0.837)' }}>{props.features}</p>
              </Typography>
            </div>
            <hr />
            <ul>
              <Pricing features={features} />
            </ul>
          </CardContent>
          <CardActions>
            <div>
              <Button className='btn-plan' style={{ backgroundColor: props.bg, color: '#feeae6' }} variant='outlined' onClick={handleOpen}>
                {props.plan}
              </Button>
              <Modal keepMounted open={open} aria-labelledby='keep-mounted-modal-title' aria-describedby='keep-mounted-modal-description'>
                <Box sx={style} className='box-modal'>
                  <img src={logo} className='success-img' alt='success' />
                  <Typography id='keep-mounted-modal-title' variant='h6' component='h2' text-align='center'>Successful!</Typography>
                  <Typography sx={{ mb: 1.5 }} style={{ color: 'grey' }}>Your payment was done successfully</Typography>
                  <Button className='modal-btn' onClick={handleClose} variant='contained' color='success'> OK</Button>
                </Box>
              </Modal>
            </div>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}
