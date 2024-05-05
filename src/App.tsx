import { UserProvider } from './stores/userContext'
import Soal1 from './components/page/soal1'
import Soal2 from './components/page/soal2'
import Soal3 from './components/page/soal3'

function App() {
	return (
		<UserProvider>
			<div className="flex flex-col w-screen p-8 gap-4">
				<h3>TEST ASSESSMENT FRONT END</h3>
				<Soal1 />
				<Soal2 />
				<Soal3 />
			</div>
		</UserProvider>
	)
}

export default App
