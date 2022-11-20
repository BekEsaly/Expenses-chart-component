fetchData();
   async function fetchData() {
      const response = await fetch('data.json');
      const data = await response.json();
    /*  console.log(data);
      console.log(data.length);*/
      labels = [];
      values = [];
      for (i = 0; i < data.length; i++) {
         labels.push(data[i].day);
         values.push(data[i].amount);
      }
      new Chart(document.getElementById("myChart"), {
         type: 'bar',
         data: {
            labels: labels,
            datasets: [{
                  label:'',
                  backgroundColor: [
                     'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(186, 34%, 60%)',
               'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)'],
                  data: values
               }
            ]
         },
           options: {
   plugins: {
      title: {
        display: true,
        align: 'start',
        text: 'Spending - Last 7 days',
        font: {
            size: 25
        }, 
        color: 'hsl(25, 47%, 15%)'
      },
      legend: {
      display: false,
    },
     
    tooltip:{
        displayColors:false,
       
        callbacks: {
             title:function(){
            display: false
              },
            label:  function(){
               for (var i = 0; i < data.length; i++) {
                   return '$'+values[i]
                
                }
               
           }
        }
    }
    },
    responsive: true,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
         
        stacked: true,
         grid: {
            display: false
        }
      },
      y: {
        stacked: true,
        ticks: {
            display:false
         
        },
        grid: {
            display: false
        }
      }
    }
    
  }
      });
   }