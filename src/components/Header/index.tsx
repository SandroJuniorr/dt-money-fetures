import LogoImg from '../../assets/logo.svg'
import { ButtonStwitchTheme } from '../ButtonStwitchTheme'
import { Container, Content } from './styles'


interface HeaderProps{
  openModal: ()=>void,
  changeTheme:  ()=>void
}
export function Header({openModal,changeTheme}: HeaderProps){
    return(
        <Container>
          <Content>
            <img src={LogoImg} alt="dt Money" />

            <div>
              <button
              onClick={openModal}
              >
                Nova transação
              </button>
              <ButtonStwitchTheme changeTheme={changeTheme}/>
             
            </div>
          </Content>
        </Container>
        
    )
}