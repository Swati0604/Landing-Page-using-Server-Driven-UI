const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const schema = {
  title: 'Landing Page',
  type: 'landingPage',
  widgets: [
    {
      type: 'announcement',
      data: {
          title: 'Super Deal! Free Shipping on Orders Over $50'
      },
      attributes: {
          styles: {
              height: "30px",
              backgroundColor: "teal",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: "500"
          }
      },
      trend: 'up',
      description: 'Compared to last month',
    },
    {
      type: 'navbar',
      attributes: {
        styles: {
          height: '60px'
        }
      },
      data: {
        type: 'leftSection', 
        leftSections: {
          type: 'text',
          data: {
            title: 'SERVER DRIVEN UI.'
          }
        },
        rightSection: {
          type: 'div',
          data: {
            type: 'menuItems',
            menuItems: [
              {
                type: 'text',
                title: 'About Us',
                attribute: {
                  style: {
                    "fontSize": "14px",
                    "cursor": "pointer",
                    "marginLeft": "25px"
                  }
                }
              },
              {
                type: 'text',
                title: 'Contact Us',
                attribute: {
                  style: {
                    "fontSize": "14px",
                    "cursor": "pointer",
                    "marginLeft": "25px"
                  }
                }
              },
              {
                type: 'img',
                title: 'Cart',
                url: '...',
                attribute: {
                  style: {
                    "fontSize": "14px",
                    "cursor": "pointer",
                    "marginLeft": "25px"
                  }
                }
              }
            ]
          }
        }
      },
    },
    // Add more widget types as needed
  ],
}

app.get('/landingPage', (req, res) => {
  res.json(schema);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
