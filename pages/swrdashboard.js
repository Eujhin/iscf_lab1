import useSWR from 'swr'


const fetcher = async () => {
    const response = await fetch('https://iscf-lab1-1b00a-default-rtdb.europe-west1.firebasedatabase.app/.json')
    const data = await response.json()
    return data
}

function DashboardSWR(intervalTime) {

    console.log("interval time" + intervalTime)
    const { data, error } = useSWR('dashboard', fetcher, { refreshInterval: intervalTime*1000 })

    if(error) return 'Error occured'
    if(!data) return 'Loading'

    const dados = Object.values(data.accel)

    let timeStamps = []
    let xValues = []
    let yValues = []
    let zValues = []
  
  
    dados.forEach(function (i){
  
      timeStamps.push(i.timestamp)
      xValues.push(i.x)
      yValues.push(i.y)
      zValues.push(i.z)
  
    });
  
    //console.log(timeStamps[0])
  
    return {
      timeStamps,
      xValues,
      yValues,
      zValues
    }
    
  }
      
export default DashboardSWR