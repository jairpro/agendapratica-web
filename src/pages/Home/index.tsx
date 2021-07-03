import { isAndroid, isDesktop } from 'react-device-detect'
// import { useHistory } from 'react-router-dom'
// import googleIconImg from '../../assets/images/google-icon.svg'
// import androidImg from '../../assets/images/android-4.svg'
import logoImg from '../../assets/images/icon_960x960.png' 
// import { useAuth } from '../../hooks/useAuth'

import './styles.scss'

export function Home() {
  // const history = useHistory()
  // const { user, signInWithGoogle } = useAuth()

  const url = "https://drive.google.com/file/d/12BRR0ZpwZ2mhEzlEwjZfapwVcfBc-BHU/view?usp=sharing"
  
  /*async function handleCreateAccount() {
    if (!user) {
      await signInWithGoogle()
    }

    history.push('/panel')
  }*/

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
          { (isAndroid || isDesktop) ? (
            <a className="download-app" href={url} download target="_blank" rel="noreferrer">
              <button>
                {/*<img src={androidImg} alt="Android" />*/}
                { isAndroid ? 'Instalar app' : 'Baixar app Android' }
              </button>
            </a>
          ) : (
            <p>App disponível apenas para Android</p>
          )}
          {/*<button onClick={handleCreateAccount} className="create-account">
            <img src={googleIconImg} alt="Google" />
            Entrar com Google
          </button>*/}
        </div>
      </main>
    </div>
  )
}