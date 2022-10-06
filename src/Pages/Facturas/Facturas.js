import React,{useState} from 'react'
import TextMedia from '../../Components/CardTypes/TextMedia'
import LocationMedia from '../../Components/CardTypes/LocationMedia'
import CalculatorPricer from '../../Components/CardTypes/CalculatorPricer'
import { makeStyles } from '@mui/styles'
import Card from '@mui/material/Card';
// import CardContent from "@material-ui/core/CardContent";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker'

const useStyles = makeStyles({
    ig:{
        textAlign:'center',
    },
    btnActionDevices:{
        marginBottom:5,
        marginTop:15,
    },
    TwoHeadersSameLine:{
      
    },
  });
  const Empresas = ['Quimica Regasa', 'Cofaco','HidroquimicaIndustrial'];
  const Productos = ['Producto1','Producto2','Producto3']
  const Contactos = ['Ing.Enrique Salas Room - HidroquimicaIndustrial']
  const Facturadores = ['Servicios Multiples','InversionesJ&F']
  const Fechas = ['13/01/2022']

  const Direccion = ['']
  const giveRuc = (val) =>{
    
    if(val==='Quimica Regasa')
    {
        return '23232002'
    }
    if(val==='Cofaco')
    {
        return '213129121'
    }
    else{
        return '';
    }

}
const giveDireccion = (val)=>
{
    if(val==='Quimica Regasa')
    {
        return 'Av.La encalada N°1420 of 803, Santiago de Surco'
    }
    if(val==='Cofaco')
    {
        return '213129Av.La encalada N°1420 of 803, Santiago de Surco121'
    }
    else{
        return '';
    }
}
const giveEmail = (val) =>{
    if(val==='Quimica Regasa')
    {
        return 'quimicaregasa@quimicaregasa.com'
    }
    if(val==='Cofaco')
    {
        return 'cofaco@cofaco.com'
    }
    if(val==='HidroquimicaIndustrial')
    {
        return 'comercializacion@hidroquimica.com.pe'
    }
    else{
        return '';
    }
}
const giveFactRuc = (val)=>{
    if(val ==='Servicios Multiples')
    {
        return '15151525251'
    }
    if(val==='InversionesJ&F')
    {
        return '10092978759'
    }
    else
    {
        return ''
    }
}
const giveTelefono = (val) =>{
    if(val==='Quimica Regasa')
    {
        return '01 8442222'
    }
    if(val==='Cofaco')
    {
        return '01 844552'
    }
    if(val==='HidroquimicaIndustrial')
    {
        return '01 4371294'
    }
    else{
        return '';
    }
}
const giveDireccionFacturador = (val) =>{
    if(val ==='Servicios Multiples')
    {
        return 'Av.Billinghurst 1089 San Juan de Miraflores'
    }
    if(val==='InversionesJ&F')
    {
        return 'Calle San Pedro Mz.Q Lote 5'
    }
    else
    {
        return ''
    }
}
const giveTelefonoFacturador = (val) =>{
    if(val ==='Servicios Multiples')
    {
        return '(01)4662334'
    }
    if(val==='InversionesJ&F')
    {
        return '924562332'
    }
    else
    {
        return ''
    }
}
const giveProductosDescripcion = (val)=>{
    if(val==='Producto1')
    {
        return 'Este producto esta hecho de p1 y p2, se vende en China, Corea y etc.'
    }
    if(val==='Producto2')
    {
        return 'Este producto esta tatata...'
    }
    if(val==='Producto3')
    {
        return 'Eso es una forma de tapasdpqwd...'
    }
    else
    {
        return '';
    }
}
const giveProductosPrecioUnitario = (val)=>{
    if(val==='Producto1')
    {
        return 3.00;
    }
    if(val==='Producto2')
    {
        return 4.00;
    }
    if(val==='Producto3')
    {
        return 5.00;
    }
    else
    {
        return '';
    }
}
const Facturas = () => {
const classes = useStyles();

const [vRuc, setVruc] = React.useState('');
const [inputvRuc, setInputvRuc] = React.useState('');
const [nombreEmpresa,setNombreEmpresa] = React.useState('');
const [inputNombEmpre,setInputNombEmpre] = React.useState('');
const [contacto,setContacto] = React.useState('');
const [inputContacto,setInputContacto] = React.useState('');
const [direccion,setDireccion] = React.useState('');
const [inputDireccion,setInputDireccion] = React.useState('');
const [email,setEmail] = React.useState('');
const [inputEmail,setInputEmail] = React.useState('');
const [telefono,setTelefono] = React.useState('');
const [inputTelefono,setInputTelefono] = React.useState('');
const [nombreFacturador,setNombreFacturador] = React.useState('');
const [inputNombreFacturador,setInputNombreFacturador] = React.useState('');
const [ruc,setRuc] = React.useState('');
const [inputFecha,setInputFecha] = React.useState('');
const [wh,setwh] = useState(window.innerWidth);
const [inputRuc,setInputRuc] = React.useState('');
const [fecha,setFecha] = React.useState('');
const [nombreComercial,setNombreComercial] = React.useState('');
const [inputNombreComercial,setInputNombreComercial] = React.useState('');
const [direccionFac,setDireccionFac] = React.useState('');
const [inputDireccionFac,setInputDireccionFac] = React.useState('');
const [telefonoFac,setTelefonoFac] = React.useState('');
const [inputTelefonoFac,setInputTelefonoFac] = React.useState('');
const [ProductoNombre,setProductoNombre] = React.useState('');
const [inputProductoNombre,setInputProductoNombre] = React.useState('');
const [DescripcionProducto,setDescripcionProducto] = React.useState(giveProductosDescripcion(ProductoNombre));
const [inputDescripcionProducto,setInputDescripcionProducto] = React.useState(giveProductosDescripcion(ProductoNombre));
 const [expanded, setExpanded] = React.useState(false);

  const handleC = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);}
const handleChange = (newValue) => {
    setFecha(newValue);
};
const switchingWidth = () =>{
    if(wh===540)
    {
        return 500
    }
    if(wh<540){
        return 340;
    }
    if(wh>=540&&wh<=1200){
        return 800; 
    }
    else{
        return 1200;
    }
}
var buttonActions= (
    <CardActions sx={{justifyContent:'space-between'}}>
    
    <Button variant="contained" size={wh<=540? 'small' : 'large'}>Crear Factura</Button>
    <Button variant="contained" size={wh<=540? 'small' : 'large'}>Contactar Ayuda</Button>               
    <Button variant="contained" size={wh<=540? 'small' : 'large'}>Limpiar Datos</Button>
    <Button variant="contained" size={wh<=540? 'small' : 'large'}>Previsualizar Factura</Button>
</CardActions>);
    if(wh<=540){
        buttonActions=(
        <div className={classes.btnActionDevices}>
        <ImageList cols={2}>
        
        <Button variant="contained" size={wh<=540? 'small' : 'large'}>Crear</Button>
        <Button variant="contained" size={wh<=540? 'small' : 'large'}>Ayuda</Button>
        </ImageList>  
        <ImageList cols={2}>             
        <Button variant="contained" size={wh<=540? 'small' : 'large'}>Limpiar</Button>
        <Button variant="contained" size={wh<=540? 'small' : 'large'}>Ver</Button>
        </ImageList>
    </div>)
    }
    return (
       <div>
        <Card variant='outlined' sx={{p:3,maxWidth: switchingWidth,height:'100%'}}>
            <div className={classes.ig}>
            <h1>Crea una Factura</h1>
            </div>

            <Divider><Chip size='medium' sx={{fontSize:'1rem'}} label="Datos del proveedor"/></Divider>
            <TextMedia 
            h2title="RUC del proveedor"
            subtitle1="La parte superior de la factura indica el ruc del proveedor."
            value={vRuc}
            inputValue={inputvRuc}
            och={(event, newValue) => {setVruc(giveRuc(newValue))}} 
            onp={(event, newInputValue) => {setInputvRuc(giveRuc(newInputValue))}} 
            superiorTitle="RUC del Proveedor" 
            wh={wh}
            options={Empresas}
            />
            <TextMedia 
            h2title="El nombre de la empresa"
            subtitle1="Aquí debe escribir el nombre de la empresa, use las opciones o escriba algún nuevo valor"
            value={nombreEmpresa}
            inputValue={inputNombEmpre}
            och={(event, newValue) => {setNombreEmpresa(newValue)}} 
            onp={(event, newInputValue) => {setInputNombEmpre(newInputValue)}} 
            superiorTitle="Empresa" 
            wh={wh}
            options={Empresas}
            />
            <TextMedia
            h2title="Contacto"
            subtitle1="Aquí debe escribir un contacto de referencia."
            value={contacto}
            inputValue={inputContacto}
            och={(event, newValue) => {setContacto(newValue)}} 
            onp={(event, newInputValue) => {setInputContacto(newInputValue)}} 
            superiorTitle="Contacto" 
            wh={wh}
            options={Contactos}
            />
            <TextMedia 
             h2title="Direccion"
             subtitle1="Aquí debe escribir la dirección de la empresa"
             value={direccion}
             inputValue={inputDireccion}
             och={(event, newValue) => {setDireccion(giveDireccion(newValue))}} 
             onp={(event, newInputValue) => {setInputDireccion(giveDireccion(newInputValue))}} 
             superiorTitle="Direccion" 
             wh={wh}
             options={Empresas}
            />
            <TextMedia 
             h2title="Email"
             subtitle1="Aquí debe el email de la empresa proveedor"
             value={email}
             inputValue={inputEmail}
             och={(event, newValue) => {setEmail(giveEmail(newValue))}} 
             onp={(event, newInputValue) => {setInputEmail(giveEmail(newInputValue))}} 
             superiorTitle="Email" 
             wh={wh}
             options={Empresas}
            />
            <TextMedia 
             h2title="Telefono"
             subtitle1="Aquí debe ir el telefono de la empresa proveedor"
             value={telefono}
             inputValue={inputTelefono}
             och={(event, newValue) => {setTelefono(giveTelefono(newValue))}} 
             onp={(event, newInputValue) => {setInputTelefono(giveTelefono(newInputValue))}} 
             superiorTitle="Telefono" 
             wh={wh}
             options={Empresas}
            />
            <Divider><Chip sx={{fontSize:'1rem',m:1}} label="Detalles de despacho"/></Divider>
            
            <LocationMedia
             h2title="Fecha de entrega"
             subtitle1="Escriba una fecha de entrega o detalle de entrega."
             value={fecha}
             handleChange={handleChange}
             wh={wh}
             />   
            <TextMedia 
             h2title="Lugar de envío"
             subtitle1="Escriba una ubicación o referencia de envío."
             value={fecha}
             inputValue={inputFecha}
             och={(event, newValue) => {setFecha(newValue)}} 
             onp={(event, newInputValue) => {setInputFecha(newInputValue)}} 
             superiorTitle="Ubicación" 
             wh={wh}
             options={Empresas}
             /> 
             
             
            <Divider><Chip sx={{fontSize:'1rem',m:1}} label="Datos del Facturador"/></Divider>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography variant='h2' sx={{fontWeight:'bold',fontSize:'1.5rem',marginBottom:0}}> 
                    Nombre del facturador :         
                </Typography>
                <Typography variant='h2' sx={{fontSize:'1.5rem',marginBottom:0,float:'Right'}}> 
                   {nombreFacturador} 
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TextMedia 
                h2title=""
                subtitle1="Escriba el nombre del facturador o puede predefinir de las opciones"
                value={nombreFacturador}
                inputValue={inputNombreFacturador}
                och={(event, newValue) => {setNombreFacturador((newValue))}} 
                onp={(event, newInputValue) => {setInputTelefono(newInputValue)}} 
                superiorTitle="Nombre del facturador" 
                wh={wh}
                options={Facturadores}
                />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                
                <Typography variant='h2' sx={{fontWeight:'bold',fontSize:'1.5rem',marginBottom:0,float:'left'}}> 
                    RUC de la empresa :
                    
                </Typography>
                <Typography variant='h2' sx={{fontSize:'1.5rem',marginBottom:0,float:'Right'}}> 
                   {ruc} 
                </Typography>
               
                </AccordionSummary>
                <AccordionDetails>
                <TextMedia 
                h2title=""
                subtitle1="Escriba el ruc de la empresa."
                value={ruc}
                inputValue={inputRuc}
                och={(event, newValue) => {setRuc(giveFactRuc(newValue))}} 
                onp={(event, newInputValue) => {setInputRuc(giveFactRuc(newInputValue))}} 
                superiorTitle="RUC" 
                wh={wh}
                options={Facturadores}
                />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                
                <Typography variant='h2' sx={{fontWeight:'bold',fontSize:'1.5rem',marginBottom:0,float:'left'}}> 
                    Nombre Comercial de la empresa :
                    
                </Typography>
                <Typography variant='h2' sx={{fontSize:'1.5rem',marginBottom:0,float:'Right'}}> 
                   {ruc} 
                </Typography>
               
                </AccordionSummary>
                <AccordionDetails>
                <TextMedia 
                h2title=""
                subtitle1="Escriba el nombre comercial de la empresa."
                value={nombreComercial}
                inputValue={inputNombreComercial}
                och={(event, newValue) => {setNombreComercial(newValue)}} 
                onp={(event, newInputValue) => {setInputNombreComercial(newInputValue)}} 
                superiorTitle="Nombre Comercial" 
                wh={wh}
                options={Facturadores}
                />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                
                <Typography variant='h2' sx={{fontWeight:'bold',fontSize:'1.5rem',marginBottom:0,float:'left'}}> 
                    Direccion :
                    
                </Typography>
                <Typography variant='h2' sx={{fontSize:'1.5rem',marginBottom:0,float:'Right'}}> 
                   {ruc} 
                </Typography>
               
                </AccordionSummary>
                <AccordionDetails>
                <TextMedia 
                h2title=""
                subtitle1="Escriba la dirección de la empresa"
                value={direccionFac}
                inputValue={inputDireccionFac}
                och={(event, newValue) => {setDireccionFac(giveDireccionFacturador(newValue))}} 
                onp={(event, newInputValue) => {setInputDireccionFac(giveDireccionFacturador(newInputValue))}} 
                superiorTitle="Direccion" 
                wh={wh}
                options={Facturadores}
                />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                
                <Typography variant='h2' sx={{fontWeight:'bold',fontSize:'1.5rem',marginBottom:0,float:'left'}}> 
                    Telefono :
                    
                </Typography>
                <Typography variant='h2' sx={{fontSize:'1.5rem',marginBottom:0,float:'Right'}}> 
                   {ruc} 
                </Typography>
               
                </AccordionSummary>
                <AccordionDetails>
                <TextMedia 
                h2title=""
                subtitle1="Escriba el telefono de la empresa."
                value={telefonoFac}
                inputValue={inputTelefonoFac}
                och={(event, newValue) => {setTelefonoFac(giveTelefonoFacturador(newValue))}} 
                onp={(event, newInputValue) => {setInputTelefonoFac(giveTelefonoFacturador(newInputValue))}} 
                superiorTitle="Telefono" 
                wh={wh}
                options={Facturadores}
                />
                </AccordionDetails>
            </Accordion>
            <Divider><Chip sx={{fontSize:'1rem',m:1}} label="Cotizacion"/></Divider>
            <TextMedia 
             h2title="Nombre del producto"
             subtitle1="Aquí debe escribir el nombre del producto"
             value={ProductoNombre}
             inputValue={inputProductoNombre}
             och={(event, newValue) => {setProductoNombre(newValue)}} 
             onp={(event, newInputValue) => {setInputProductoNombre(newInputValue)}} 
             superiorTitle="Nombre Producto" 
             wh={wh}
             options={Productos}
            />
            <TextMedia 
             h2title="Descripción"
             subtitle1="Breve descripción del producto."
             value={DescripcionProducto}
             inputValue={inputDescripcionProducto}
             och={(event, newValue) => {setDescripcionProducto(giveProductosDescripcion(newValue))}} 
             onp={(event, newInputValue) => {setInputDescripcionProducto(giveProductosDescripcion(newInputValue))}} 
             superiorTitle="Descripción del producto" 
             wh={wh}
             options={Productos}
            />
            
            <Accordion  expanded={expanded === 'panel1'} onChange={handleC('panel1')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                
                <Typography variant='h2' sx={{fontWeight:'bold',fontSize:'1.5rem',width: '33%', flexShrink: 0 }}> 
                    Producto1                
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <CalculatorPricer
                    h2title=""
                    subtitle1="qwdqwdqwpdlqwpdlqwpldqwpqwl"
                    wh={wh}
                    />
                </AccordionDetails>
            </Accordion>
            <div className={classes.ig}>
            <Button variant="contained" size={wh<=540? 'small' : 'large'}>Add Products</Button>
            </div>
            {buttonActions}

        </Card>       
       </div>

    )
}

export default Facturas;
