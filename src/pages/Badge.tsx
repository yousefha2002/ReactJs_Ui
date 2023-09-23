import BadgeBox from '../components/badge/BadgeBox'

export default function Badge() {
    return (
        <div className='Container'>
            <div className='mb-12 flex flex-wrap items-center gap-x-8'>
                <BadgeBox badgeContent={9} horizontal='right' vertical='top'/>
                <BadgeBox badgeContent={9} horizontal='right' vertical='bottom'/>
                <BadgeBox badgeContent={9} horizontal='left' vertical='top'/>
                <BadgeBox badgeContent={9} horizontal='left' vertical='bottom'/>
            </div>
            <div className='flex flex-wrap items-center gap-x-8'>
                <BadgeBox badgeContent={0} horizontal='right' vertical='top'/>
                <BadgeBox badgeContent={98} horizontal='right' vertical='top'/>
                <BadgeBox badgeContent={99} horizontal='right' vertical='top'/>
                <BadgeBox badgeContent={100} horizontal='right' vertical='top'/>
            </div>
        </div>
    )
}
