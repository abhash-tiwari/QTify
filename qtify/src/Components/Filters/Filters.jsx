// import React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import styles from "./Filters.module.css"

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };



// export default function Filters(filters, selectedFilterIndex, setSelectedFilterIndex) {

//     function a11yProps(index) {
//         return {
//           id: `simple-tab-${index}`,
//           'aria-controls': `simple-tabpanel-${index}`,
//         };
//       }

//   const handleChange = (event, newValue) => {
//     setSelectedFilterIndex(newValue);
//   };

//   return (
//     <div>
//         <Tabs value={selectedFilterIndex} onChange={handleChange} aria-label='basic tabs' TabIndicatorProps={{
//             style: { backgroundColor: "#34c94b"}
//         }} textColor='#34c94b' className={styles.tabs}>
//            {filters.map((ele, idx) => (
//                 <Tab className={styles.tabs} label={ele.label} {...a11yProps(idx)} key={idx} />
//             ))}
//       </Tabs>
//       {filters.map((ele, idx) => (
//             <TabPanel value={ele.label} index={idx} key={idx} />
//         ))}
//     </div>
//   );
// }


import * as React from 'react'
import { PropTypes } from 'prop-types'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import styles from "./Filters.module.css"
import { useEffect, useState } from 'react'


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

CustomTabPanel.prototype = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function allyProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
export default function Filters({ filters, selectedFilterIndex, setSelectedFilterIndex }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedFilterIndex(newValue);
        setValue(newValue)
        //     console.log('new value is ' + newValue)
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label='basic tabs' TabIndicatorProps={{
                    style: { backgroundColor: "#34c94b" }
                }} textColor='#34c94b' className={styles.tabs}>
                    <Tab label="all" {...allyProps(0)} />
                    <Tab label="rock" {...allyProps(1)} />
                    <Tab label="pop" {...allyProps(2)} />
                    <Tab label="jazz" {...allyProps(3)} />
                    <Tab label="blues" {...allyProps(4)} />
                </Tabs>
            </Box>
        </Box>
    )
}