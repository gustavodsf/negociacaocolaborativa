'use client'
import Image from 'next/image'
import Link from 'next/link';
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';
import 'beautiful-react-diagrams/styles.css';
import "./style.css";


const initialSchema = createSchema({
  nodes: [
    { id: 'node-1', content: 'Perspectivas', coordinates: [600, 10], },
    { id: 'node-2', content: 'Identidade da criança', coordinates: [200, 70] },
    { id: 'node-3', content: 'Maturidade da criança', coordinates: [400, 70], },
    { id: 'node-4', content: 'Apoiar a escolha', coordinates: [600, 70] },
    { id: 'node-5', content: 'Conteúdo Informativo', coordinates: [800, 70] },
    { id: 'node-6', content: 'Conteúdos Extremados', coordinates: [1000, 70] },
  ],
  links: [
    { input: 'node-1',  output: 'node-2' },
    { input: 'node-1',  output: 'node-3' },
    { input: 'node-1',  output: 'node-4' },
    { input: 'node-1',  output: 'node-5' },
    { input: 'node-1',  output: 'node-6' },
  ]
});

const UncontrolledDiagram = () => {
  // create diagrams schema
  const [schema, { onChange }] = useSchema(initialSchema);

  return (
    <div style={{ height: '24rem', width: '80rem'}}>
      <Diagram schema={schema} onChange={onChange}/>
    </div>
  );
};


 
export default async function Perspectiva() {

  return (
    <div className="bg-colabBlue h-[100vh] w-[100vw] flex justify-center items-center">
      <div className='m-auto w-[60%] h-[70%] flex flex-col items-center justify-center'>
        <header>
          <Image
            src="/perspective.png"
            width={250}
            height={300}
            alt="lamp"
          />
        </header>
        <main>
          <UncontrolledDiagram />
          <Link 
              href="/vote"
              className='bg-transparent text-colabGreen font-semibold bg-colabBlue 
              py-2 px-4 border-colabGreen hover:border-transparent 
              hover:bg-colabGreen hover:text-colabBlue rounded flex w-[10rem]
              border-2 shadow-2xl
              items-center justify-center'
            >
            <span className="material-symbols-outlined mr-1">subdirectory_arrow_right</span>
            <span className='text-xl'>Enter</span>
          </Link>
        </main>
      </div>
    </div>
  )
}