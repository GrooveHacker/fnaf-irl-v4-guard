import { useState } from 'react'
import CameraButton from './CameraButton'

function App() {
  const [camera, setCamera] = useState(1);

  return (
    <div className="w-full h-full p-6 box-border flex">
      <div className="absolute top-0 left-0 w-full h-full"></div>
      <div className="border border-violet-900 grow relative"></div>
      <div className="grid grd-cols-1 absolute bottom-12 left-12 gap-y-2">
        <CameraButton number="1" current={camera} setCurrent={setCamera} />
        <CameraButton number="2" current={camera} setCurrent={setCamera} />
        <CameraButton number="3" current={camera} setCurrent={setCamera} />
        <CameraButton number="4" current={camera} setCurrent={setCamera} />
      </div>
    </div>
  )
}

export default App
