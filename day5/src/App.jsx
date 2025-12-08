
import { useState ,useEffect } from 'react'
import './App.css'
import { Button } from './components/Buttons/Button'
import { Modal } from './components/Modal/Modal'
import { toast } from 'react-toastify'

function App() {

  const [showModal , setShowModal] =  useState(false);

  function handleClick(){
    setShowModal(true)
  }

  const toastClick = ()=>{
     toast.success(" Notification came successfully ");
  }
  
   useEffect(() => {
    if(showModal){
      document.body.style.overflowY="hidden"
    }else{
      document.body.style.overflowY="scroll"
    }
  
    return () => { document.body.style.overflowY="scroll" ;
    } ;
  }, [showModal])
  
  const toastFailedClick =()=>{
    toast.error(" Login Failed " , {bodyClassName : "toastBody"})
    
  }

  return (
    <>
     <div className=' w-[90%] mt-5 gap-4 mx-auto'> 
      <Button type={'text'} font_color={'white'} bg={'bg-amber-700'} text={'Open Modal'} padding={'1rem'} onClick={handleClick} />
      <span className='ml-10'></span>
      <Button type={'text'} font_color={'white'} bg={'bg-green-700'} text={'Click for Toast Notification'} padding={'1rem'} onClick={toastClick} />
      <span className='ml-10'></span>
      <Button type={'text'} font_color={'white'} bg={'bg-red-700'} text={'Click for Toast failed Notification'} padding={'1rem'} onClick={toastFailedClick} />

      <div className='mt-4'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ab ut, necessitatibus nam fuga dolorum culpa hic eius porro. Quasi nam nisi aliquid vel distinctio ut corrupti iusto dolorem maiores.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repellat maxime magnam sint dicta? Numquam soluta quis, veniam explicabo perferendis sint nam obcaecati voluptas esse error repellat nostrum quod iure.
      </div>
      <div className='mt-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem in dicta at impedit cupiditate incidunt quae delectus atque veniam a tempore quo nulla dolores ut repellendus necessitatibus nemo, illo sit.
        Quaerat ipsa iste tenetur eum rerum quae ipsum exercitationem harum nihil veniam recusandae quam laborum modi at, ex incidunt, aperiam ad eligendi consequatur neque perspiciatis laboriosam minima repudiandae. Sed, vel?
        Omnis ex quam corrupti, recusandae officia unde reprehenderit voluptates quos excepturi veniam distinctio ut voluptatem consequatur provident repellendus laboriosam nobis tempora veritatis ullam! Provident dolores ea, modi repellendus numquam nihil!
        Illo cupiditate neque explicabo nemo nam assumenda aliquam iure sint, labore maiores. Consequuntur obcaecati minus amet minima quo blanditiis provident voluptatibus velit facilis eos, distinctio, voluptatem, praesentium facere laboriosam dignissimos!
        Ipsum error suscipit iusto dolore impedit in, odit sunt temporibus hic? Praesentium corrupti exercitationem accusamus eveniet quod impedit dolorum, accusantium est itaque rem eligendi excepturi. Error adipisci natus velit neque?
        Velit suscipit reiciendis ad consequatur natus veritatis corrupti sapiente, quos necessitatibus similique soluta, assumenda magnam nobis unde? Incidunt dolorum ratione hic sequi totam. Voluptatum fugiat odit qui eaque repudiandae sint.
        Est magni earum dolore autem fugit, non voluptas, quo saepe, illo iste totam! Ipsum laborum esse laboriosam, facilis nostrum et. Minus animi deserunt facere rerum a cupiditate sit deleniti ipsam?
        Quas ratione reiciendis debitis nulla sapiente veniam maxime, quisquam animi iusto autem? Libero, atque temporibus excepturi veniam nihil, itaque quidem laboriosam recusandae obcaecati rerum non optio eligendi vero neque quasi.
        Impedit debitis dolor tenetur quos obcaecati ipsum, veritatis, est quis corporis velit officiis ipsa natus! Quis unde eos quo, ratione blanditiis voluptatibus laborum illum debitis? Rem totam sapiente nam iste!
        Nobis sunt blanditiis autem labore adipisci magni. Saepe maxime inventore enim pariatur, obcaecati, hic tempora voluptatibus voluptas deleniti fugit cupiditate ea aliquam reiciendis? Ut, voluptatibus rem recusandae quaerat neque ratione.
        Officia porro obcaecati recusandae ratione magni amet earum autem sequi numquam quam quia fuga, reiciendis sunt! Soluta mollitia voluptatem illo unde quo esse enim consequatur animi nam blanditiis. Voluptas, illo.
        Voluptate eligendi fuga atque laborum itaque accusamus optio. Quisquam laborum repellat nobis sunt quia odit quaerat placeat! Et officiis perspiciatis, asperiores, quam reiciendis suscipit deserunt, at totam temporibus quibusdam nobis.
        Voluptates, veniam illo? Itaque sequi asperiores minima cum. Exercitationem natus, modi vel omnis aperiam quasi dolorum nihil excepturi voluptatibus ipsa atque tenetur, labore perferendis quis repellendus commodi error laudantium! Laborum?
        Sed velit neque a temporibus alias dolorum, natus id possimus dignissimos assumenda quia modi debitis quae nihil quaerat. Maxime cumque voluptatum error ab eligendi nesciunt, nostrum rem sequi accusantium molestiae?
        Dolorum rerum, ad corrupti sunt modi quod atque et esse provident. Est dolore nemo facilis ad veniam ab distinctio cum illo unde hic, consequatur cupiditate quis magnam odit quisquam saepe.
        Placeat dignissimos, libero quaerat eum cupiditate dolore eligendi doloremque eos maiores error incidunt perspiciatis sed exercitationem vitae quasi laudantium? Accusamus necessitatibus hic incidunt? Sunt fugiat, recusandae quaerat non rerum maxime!
        Quis rem facere ipsam nemo quaerat at adipisci! Ullam ut enim quisquam! Animi amet nam aut porro, libero earum sit, a assumenda dolorum totam facere ex reiciendis voluptatem enim perspiciatis!
        Odit illo quasi sed dolorum. In qui illo accusamus nisi atque non ut vero eligendi! Commodi consequuntur, corrupti ullam laudantium eaque quidem omnis beatae dolorum distinctio autem, perferendis nisi facere!
        A delectus dolor nesciunt magni velit quidem quisquam perspiciatis eligendi id placeat porro, expedita tenetur tempore minus nemo ipsum dolore doloremque? Facilis repellendus non maiores nulla fuga debitis quibusdam qui.
        A, facere excepturi quaerat nostrum sequi dolores laudantium nesciunt error impedit itaque incidunt sit praesentium velit asperiores ex quia necessitatibus repudiandae ipsam reprehenderit temporibus possimus commodi distinctio? Corporis, quaerat praesentium.
      </div>
         <div className='mt-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem in dicta at impedit cupiditate incidunt quae delectus atque veniam a tempore quo nulla dolores ut repellendus necessitatibus nemo, illo sit.
        Quaerat ipsa iste tenetur eum rerum quae ipsum exercitationem harum nihil veniam recusandae quam laborum modi at, ex incidunt, aperiam ad eligendi consequatur neque perspiciatis laboriosam minima repudiandae. Sed, vel?
        Omnis ex quam corrupti, recusandae officia unde reprehenderit voluptates quos excepturi veniam distinctio ut voluptatem consequatur provident repellendus laboriosam nobis tempora veritatis ullam! Provident dolores ea, modi repellendus numquam nihil!
        Illo cupiditate neque explicabo nemo nam assumenda aliquam iure sint, labore maiores. Consequuntur obcaecati minus amet minima quo blanditiis provident voluptatibus velit facilis eos, distinctio, voluptatem, praesentium facere laboriosam dignissimos!
        Ipsum error suscipit iusto dolore impedit in, odit sunt temporibus hic? Praesentium corrupti exercitationem accusamus eveniet quod impedit dolorum, accusantium est itaque rem eligendi excepturi. Error adipisci natus velit neque?
        Velit suscipit reiciendis ad consequatur natus veritatis corrupti sapiente, quos necessitatibus similique soluta, assumenda magnam nobis unde? Incidunt dolorum ratione hic sequi totam. Voluptatum fugiat odit qui eaque repudiandae sint.
        Est magni earum dolore autem fugit, non voluptas, quo saepe, illo iste totam! Ipsum laborum esse laboriosam, facilis nostrum et. Minus animi deserunt facere rerum a cupiditate sit deleniti ipsam?
        Quas ratione reiciendis debitis nulla sapiente veniam maxime, quisquam animi iusto autem? Libero, atque temporibus excepturi veniam nihil, itaque quidem laboriosam recusandae obcaecati rerum non optio eligendi vero neque quasi.
        Impedit debitis dolor tenetur quos obcaecati ipsum, veritatis, est quis corporis velit officiis ipsa natus! Quis unde eos quo, ratione blanditiis voluptatibus laborum illum debitis? Rem totam sapiente nam iste!
        Nobis sunt blanditiis autem labore adipisci magni. Saepe maxime inventore enim pariatur, obcaecati, hic tempora voluptatibus voluptas deleniti fugit cupiditate ea aliquam reiciendis? Ut, voluptatibus rem recusandae quaerat neque ratione.
        Officia porro obcaecati recusandae ratione magni amet earum autem sequi numquam quam quia fuga, reiciendis sunt! Soluta mollitia voluptatem illo unde quo esse enim consequatur animi nam blanditiis. Voluptas, illo.
        Voluptate eligendi fuga atque laborum itaque accusamus optio. Quisquam laborum repellat nobis sunt quia odit quaerat placeat! Et officiis perspiciatis, asperiores, quam reiciendis suscipit deserunt, at totam temporibus quibusdam nobis.
        Voluptates, veniam illo? Itaque sequi asperiores minima cum. Exercitationem natus, modi vel omnis aperiam quasi dolorum nihil excepturi voluptatibus ipsa atque tenetur, labore perferendis quis repellendus commodi error laudantium! Laborum?
        Sed velit neque a temporibus alias dolorum, natus id possimus dignissimos assumenda quia modi debitis quae nihil quaerat. Maxime cumque voluptatum error ab eligendi nesciunt, nostrum rem sequi accusantium molestiae?
        Dolorum rerum, ad corrupti sunt modi quod atque et esse provident. Est dolore nemo facilis ad veniam ab distinctio cum illo unde hic, consequatur cupiditate quis magnam odit quisquam saepe.
        Placeat dignissimos, libero quaerat eum cupiditate dolore eligendi doloremque eos maiores error incidunt perspiciatis sed exercitationem vitae quasi laudantium? Accusamus necessitatibus hic incidunt? Sunt fugiat, recusandae quaerat non rerum maxime!
        Quis rem facere ipsam nemo quaerat at adipisci! Ullam ut enim quisquam! Animi amet nam aut porro, libero earum sit, a assumenda dolorum totam facere ex reiciendis voluptatem enim perspiciatis!
        Odit illo quasi sed dolorum. In qui illo accusamus nisi atque non ut vero eligendi! Commodi consequuntur, corrupti ullam laudantium eaque quidem omnis beatae dolorum distinctio autem, perferendis nisi facere!
        A delectus dolor nesciunt magni velit quidem quisquam perspiciatis eligendi id placeat porro, expedita tenetur tempore minus nemo ipsum dolore doloremque? Facilis repellendus non maiores nulla fuga debitis quibusdam qui.
        A, facere excepturi quaerat nostrum sequi dolores laudantium nesciunt error impedit itaque incidunt sit praesentium velit asperiores ex quia necessitatibus repudiandae ipsam reprehenderit temporibus possimus commodi distinctio? Corporis, quaerat praesentium.
      </div>

      
      { showModal && <Modal  setShowModal={setShowModal}/>}
    </div>
    </>
  )
}
export default App
