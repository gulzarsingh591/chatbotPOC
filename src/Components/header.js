import logo from '../Images/logo.png';

export default function Header() {
   return (
      <div style={{ backgroundColor: 'black', textAlign: 'left', maxHeight: '12vh', minHeight: '12vh' }}>
         <span style={{ color: 'white', margin: 0, marginLeft: '30px', fontSize: '16px' }}><img alt="" src={logo} width={90} height={70} style={{ verticalAlign: 'middle' }} />
            Enterprise Knowledge Base
         </span>
      </div>
   );
}