import { Link, useHistory } from 'react-router-dom'
import googleIconImg from '../../assets/images/google-icon.svg'
import logoImg from '../../assets/images/icon_960x960.png' 
import { useAuth } from '../../hooks/useAuth'

import './styles.scss'

export function Home() {
  const history = useHistory()
  const { user, signInWithGoogle } = useAuth()

  const url = "https://drive.google.com/file/d/12BRR0ZpwZ2mhEzlEwjZfapwVcfBc-BHU/view?usp=sharing"
  
  async function handleCreateAccount() {
    if (!user) {
      await signInWithGoogle()
    }

    history.push('/panel')
  }

  return (
    <div id="auth-page">
      <aside>
        <strong>Organize suas atividades</strong>
        <p>Faça cada tarefa com atenção e eduque sua mente para a concentração</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Agenda Prática" />
          <h2>Agenda Prática</h2>
          <a className="download-app" href={url} download target="_blank" rel="noreferrer">
            <button>
              Baixar App
            </button>
          </a>
          {/*<button onClick={handleCreateAccount} className="create-account">
            <img src={googleIconImg} alt="Google" />
            Entrar com Google
          </button>*/}
        </div>
      </main>
    </div>
  )
}