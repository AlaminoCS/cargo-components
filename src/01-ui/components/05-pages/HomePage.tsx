import { Container } from '@mui/material'
import SectionOurServicesOrg from '../03-organisms/SectionOurServicesOrg'
import HeaderTpl from '../04-templates/HeaderTpl'
import SectionContainerImageTpl from '../04-templates/SectionContainerImageTpl'
import SectionDifferentialsTpl from '../04-templates/SectionDifferentialsTpl'
import SectionLocationTpl from '../04-templates/SectionLocationTpl'
import SectionWhoWeAreTpl from '../04-templates/SectionWhoWeAreTpl'


const HomePage = () => {
  return (
    <Container>
      <HeaderTpl />
      <SectionOurServicesOrg />
      <SectionWhoWeAreTpl />
      <SectionContainerImageTpl />
      <SectionDifferentialsTpl />
      <SectionLocationTpl />
    </Container>
  )
}

export default HomePage
