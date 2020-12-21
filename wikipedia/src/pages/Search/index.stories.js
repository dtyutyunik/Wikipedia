import React from 'react';
import moxios from 'moxios';
import Page from '.';


moxios.install();

moxios.stubRequest('https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=happy&limit=50',{
  status: 200,
  response: ["happy",["Happiness","Happy Days","Happy Xmas (War Is Over)","Happy (Pharrell Williams song)","Happy New Year (2014 film)","Happy Feet","Happy Endings (TV series)","Happy Birthday to You","Happy Tree Friends","Happy Death Day","Happy! (TV series)","Happy Death Day 2U","Happy Mondays","Happy Together (1997 film)","Happy Gilmore","Happy Chandler","Happy Sunday","Happy Camp (TV series)","Happy Feet Two","Happy Together (American TV series)","Happy Valley (TV series)","Happy Bhag Jayegi","Happy Together (talk show)","Happy Home (TV series)","Happy number","Happy Together (song)","Happy Bottom Riding Club","Happy Valley-Goose Bay","Happy Yipee Yehey!","Happy Valley set","Happy Sugar Life","Happy Days (play)","Happy Madison Productions","Happy (Leona Lewis song)","Happy Birthday to Me (film)","Happy Days (2007 film)","Happy Face Entertainment","Happy Valley AA","Happy Anywhere","Happy Hardy and Heer","Happy-Go-Lucky (2008 film)","Happy Hogan (character)","Happy Endings (season 3)","Happy End (musical)","Happy Endings (season 2)","Happy Land fire","Happy (manga character)","Happy Science","Happy Rhodes","Happy hardcore"],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["https://en.wikipedia.org/wiki/Happiness","https://en.wikipedia.org/wiki/Happy_Days","https://en.wikipedia.org/wiki/Happy_Xmas_(War_Is_Over)","https://en.wikipedia.org/wiki/Happy_(Pharrell_Williams_song)","https://en.wikipedia.org/wiki/Happy_New_Year_(2014_film)","https://en.wikipedia.org/wiki/Happy_Feet","https://en.wikipedia.org/wiki/Happy_Endings_(TV_series)","https://en.wikipedia.org/wiki/Happy_Birthday_to_You","https://en.wikipedia.org/wiki/Happy_Tree_Friends","https://en.wikipedia.org/wiki/Happy_Death_Day","https://en.wikipedia.org/wiki/Happy!_(TV_series)","https://en.wikipedia.org/wiki/Happy_Death_Day_2U","https://en.wikipedia.org/wiki/Happy_Mondays","https://en.wikipedia.org/wiki/Happy_Together_(1997_film)","https://en.wikipedia.org/wiki/Happy_Gilmore","https://en.wikipedia.org/wiki/Happy_Chandler","https://en.wikipedia.org/wiki/Happy_Sunday","https://en.wikipedia.org/wiki/Happy_Camp_(TV_series)","https://en.wikipedia.org/wiki/Happy_Feet_Two","https://en.wikipedia.org/wiki/Happy_Together_(American_TV_series)","https://en.wikipedia.org/wiki/Happy_Valley_(TV_series)","https://en.wikipedia.org/wiki/Happy_Bhag_Jayegi","https://en.wikipedia.org/wiki/Happy_Together_(talk_show)","https://en.wikipedia.org/wiki/Happy_Home_(TV_series)","https://en.wikipedia.org/wiki/Happy_number","https://en.wikipedia.org/wiki/Happy_Together_(song)","https://en.wikipedia.org/wiki/Happy_Bottom_Riding_Club","https://en.wikipedia.org/wiki/Happy_Valley-Goose_Bay","https://en.wikipedia.org/wiki/Happy_Yipee_Yehey!","https://en.wikipedia.org/wiki/Happy_Valley_set","https://en.wikipedia.org/wiki/Happy_Sugar_Life","https://en.wikipedia.org/wiki/Happy_Days_(play)","https://en.wikipedia.org/wiki/Happy_Madison_Productions","https://en.wikipedia.org/wiki/Happy_(Leona_Lewis_song)","https://en.wikipedia.org/wiki/Happy_Birthday_to_Me_(film)","https://en.wikipedia.org/wiki/Happy_Days_(2007_film)","https://en.wikipedia.org/wiki/Happy_Face_Entertainment","https://en.wikipedia.org/wiki/Happy_Valley_AA","https://en.wikipedia.org/wiki/Happy_Anywhere","https://en.wikipedia.org/wiki/Happy_Hardy_and_Heer","https://en.wikipedia.org/wiki/Happy-Go-Lucky_(2008_film)","https://en.wikipedia.org/wiki/Happy_Hogan_(character)","https://en.wikipedia.org/wiki/Happy_Endings_(season_3)","https://en.wikipedia.org/wiki/Happy_End_(musical)","https://en.wikipedia.org/wiki/Happy_Endings_(season_2)","https://en.wikipedia.org/wiki/Happy_Land_fire","https://en.wikipedia.org/wiki/Happy_(manga_character)","https://en.wikipedia.org/wiki/Happy_Science","https://en.wikipedia.org/wiki/Happy_Rhodes","https://en.wikipedia.org/wiki/Happy_hardcore"]]
});


export default {
  title: 'Pages/Search',
  component: Page,  
};

const Template = (args) => <Page {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  location:{
    search: '?query=test'
  }
  
};

export const NoData = Template.bind({});
NoData.args = {
  location:{
    search: '?query=sdfsdfsfsdfsdf'
  }
  
};
