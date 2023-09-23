import React from 'react'
import Tab from '../components/tabs/Tab'
import TabsBox from '../components/tabs/TabsBox'

export default function Tabs() {
    return (
        <div className='Container'>
            <TabsBox>
                <Tab label="Tab 1">Content for Tab 1</Tab>
                <Tab label="Tab 2">Content for Tab 2</Tab>
                <Tab label="Tab 3">Content for Tab 3</Tab>
            </TabsBox>
        </div>
    )
}
