import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from '@mui/system';
import { Grid, Card, Typography, Button, Rating, TextField } from '@mui/material';
import FeedbackModal from './components/FeebackModal';
import { getExternalClicks, registerExternalLinkClick } from './services/DummyStore';

interface Props {
}

const App:React.FC<Props> = ()=>{

  const [essayModalopen, setEssayModalOpen] = useState<boolean>(false)
  const [essayRating, setEssayRating] = useState(0)
  const [siteModalOpen, setSiteModalOpen] = useState<boolean>(false)
  const [siteRating, setSiteRating] = useState(0)

  /* Utils */

  const trackClicks = ():void => {
    
     // to track number of times user has been redirected to trustpilot
     registerExternalLinkClick()
     console.log(getExternalClicks())
  }
  

  /* Callbacks */

  const handleEssayModalSubmit = useCallback(():void=>{
    
    // show site feedback modal


    // to display the number times a user has been redirected to trustpilot (only for testing)
    console.log(getExternalClicks())
    



  }, [essayRating, setEssayRating]);

  const handleSiteModalSubmit = useCallback(():void=>{

    if (essayRating < 5 && siteRating < 5) {

      // Rating is not good so just show a thank you page

    } else {
      // Rating is 5 star so display a modal with a link to trustpilot to leave feedback there


     

    }

  }, [essayRating, siteRating, setEssayRating, setSiteRating])

  const handleEssayModal = useCallback(():void=>{
    setEssayModalOpen(!essayModalopen)
  }, [setEssayModalOpen, essayModalopen]);
  


  return (
    <>
    <FeedbackModal
      open={essayModalopen}
      onClose={handleEssayModal}
    >
      <Grid container justifyContent={'center'}>
        <Grid item xs={10} justifyContent='center'>
        <Typography variant='h5' textAlign={'center'} fontWeight={'bold'} mb={1}>
          Give Feedback
        </Typography>
        <Typography variant='body1' textAlign={'center'} mb={2}>
          How satisfied are you with this essay ?
        </Typography>
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
        <Rating 
        size='large'
        name={'essayRating'}
        value={essayRating}
        onChange={(name, newRating)=>{
          //@ts-ignore
          setEssayRating(newRating)
        }}
        />
        </div>
        </Grid>
        <Grid item xs={10} pt={2} container justifyContent={'center'}>
        <TextField
          id="outlined-textarea"
          label="Write your comments here"
          placeholder="What are your reasons for this rating ?"
          multiline
          minRows={4}
          maxRows={4}
        />
        </Grid>
        <Grid item container justifyContent={'center'} xs={10} pb={2}>
        <Button variant='contained' sx={{mt: 2}}
        onClick={handleEssayModalSubmit}
        >
          Submit
        </Button>
        </Grid>
      </Grid>

    </FeedbackModal>

{/* Add Feedback Modal for the site here */}


  <Grid container direction={'column'}>
    <Grid item container xs={12} spacing={3}>
      <Grid xs={1} lg={3} />
      <Grid item xs={10} lg={6}>
      <Card sx={{ p: 3 ,my: 4,borderRadius: '10px', backgroundColor: 'white' }}  >
        <Typography component="p" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt nec magna eu venenatis. Integer dui tellus, auctor at nulla et, volutpat euismod nisl. Sed ipsum elit, blandit ut congue et, iaculis non justo. Curabitur sed viverra turpis, in sodales massa. Cras lectus nibh, consequat in tempor ac, porttitor eget sapien. Morbi placerat ut lectus ut mattis. Nulla et sagittis neque. Aenean gravida feugiat nibh non ullamcorper.
        </Typography>
      </Card> 
      </Grid>
      <Grid xs={1} lg={3} />
    </Grid>
    <Grid item container xs={12}>
      <Grid item xs={3} lg={4} />
      <Grid item xs={6} lg={4} container justifyContent={'center'}>
      <Button variant='contained'
      onClick={handleEssayModal}
      >Leave Feadback</Button>
      </Grid>
      <Grid item xs={3} lg={4} />
    </Grid>
    <Grid item container xs={12}>
      <Grid item xs={3} lg={4} />
      <Grid item xs={6} lg={4} container justifyContent={'center'}>
      <Button variant='text' size='small' sx={{mt: 2}}>Don't want to leave Feedback</Button>
      </Grid>
      <Grid item xs={3} lg={4} />
    </Grid>
  </Grid>
  </>
  );
}

export default App;
