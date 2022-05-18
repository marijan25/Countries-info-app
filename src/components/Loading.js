import '../style/homeStyle.css'
import { Box } from '@mui/material'
import { ProgressCircle } from 'react-desktop/macOs';

const funFact = [
    {
        id: 0,
        content: "Canada, the most lakes in the world - It’s almost impossible to think of Canada without images of the Great Lakes coming to mind, but one of the 6 fun facts is that there are more lakes in Canada than in all the other countries in the world combined? In fact, because they’re so large, they are actually considered to be enclosed seas"
    },
    {
        id: 1,
        content: "Bolivia, the world’s flattest country - If you hate hills, Bolivia is the place for you. One of the fun facts about the world is that this country holds the title of being the flattest country on the planet. It also holds other records such as having the longest salt flat. The Uyuni salt flats are also the largest lithium reserve in the world."
    },
    {
        id: 2,
        title: "Russia, the world’s largest country",
        content: "Russia, the world’s largest country - This fun fact is probably common knowledge, but do you know how many countries Russia borders? No less than 16 states. Norway, Finland, Estonia, Latvia, Lithuania, Poland, Japan, Belarus, Ukraine, Georgia, Azerbaijan, Kazakhstan, China, the United States, Mongolia and North Korea."
    },
    {
        id: 3,
        content: "The world’s oldest country is in Europe - It may not surprise you to know that the Old Continent is home to some of the oldest countries on earth. But one of our fun facts is that the title of the world’s oldest country goes to San Marino. A small country covering just 62 square kilometres, originally formed in 301 AD."
    },
    {
        id: 4,
        content: "France’s longest land border is in Brazil - No, it’s not that we’re bad at geography, but perhaps there’s a bit of a catch with this fun fact about the world. Brazil and France share a 673-kilometre border thanks to French Guiana – something you probably didn’t know about these countries!"
    },
    {
        id: 5,
        content: "Going to prison for cheating during an exam - The world is full of strange laws that may surprise you if you’ve never heard of them before. Did you know that cheating on an exam in Bangladesh is punishable by imprisonment? I’m sure this fun fact will make people think twice before taking a “cheat” test."
    }
]
const Loading = ({darkMode}) => {
  const randomFact = function () {
    return Math.floor(Math.random() * funFact.length)
  }
  return (
    <Box>
    <Box className={darkMode ? 'loading-dark-mode' : 'loading'}>
      <h1>Loading...</h1>
      <Box className='progress-circle'>
        <ProgressCircle
            size={100}
            color="black"
        />
      </Box>
      < h3 className='content'> {funFact[randomFact()].content} </h3 >
    </Box>
    <Box className='proba'><h1>Proba</h1></Box>
    </Box>
  )
}

export default Loading
