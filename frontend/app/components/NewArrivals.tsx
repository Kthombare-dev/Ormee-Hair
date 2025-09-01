import React from 'react';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  isLiked?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, isLiked = false }) => {
  return (
    <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow duration-200">
      {/* Image Container */}
      <div className="relative h-80 bg-gray-50 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Vertical "New arrivals" text overlay - at top left */}
        <div className="absolute left-3 top-3">
          <div className="transform -rotate-90 origin-top-left translate-y-25">
            <span className="text-2xs font-normal text-gray-700 tracking-wide whitespace-nowrap">
              New Arrivals
            </span>
          </div>
        </div>
        
        {/* Heart Icon */}
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
          <Heart 
            size={16} 
            className={`${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'} transition-colors`}
          />
        </button>
        {/* Navigation Arrows */}
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-gray-600 text-sm">‹</span>
        </button>
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-gray-600 text-sm">›</span>
        </button>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-lg font-semibold text-gray-900">₹{price}</p>
      </div>
    </div>
  );
};

const NewArrivalsPage = () => {
  const products = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN8zOeqp2XRmsGeNBxZiEOMC-mXkjhqX9rbg&s",
      title: "My Sicily Handbag in glossy calfskin",
      price: "2,645",
      isLiked: false
    },
    {
      id: 2,
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQDxUPDxAQEBAQFQ8QDxAPEA8PDw8QFRUXFhUVFRUYHSggGBolGxUVITEhJikrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQFy0fICUvLS8tLS0tLS0rKy0rKy8tLS0tLS0tLS0tLS0rKy0tLS0tLS0tLS8tLS0tLS0tLS0tLf/AABEIAK4BIgMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAACAwEEAAUGB//EAD4QAAIBAgMEBwUHAgYDAQAAAAECAAMRBBIhBTFBYQYTIlFxgZEyQqGxwRQjM1JictHh8AckgpKi0kOy8XP/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAjEQEBAAIBAwQDAQAAAAAAAAAAAQIRAxIhMSIyQVEEE2Fx/9oADAMBAAIRAxEAPwC+gjkEWsesj6VGojVEBBHKIZoljFEEQxDIhDWCIQhBiSJAkiEGsMQFhiEGIQgAwhKgxCEAQhCCEKCJMImZIJmXgTJg3kgwJkyJMCbTLTIQECLSCIcyAFpFoy0wiAoiQRGlYJWArLBIjSJBEBJWAyx5EEiF2RlmRtpkiuTQRyiLQRyw70xRGrFrGrDNGsMQFhwghJBg3kgwhgkiKvCBgOBhBonNJDQh94SmJDQlaE0eDCBiQYYMqGgyYAMm8IImDeV8di0o02q1GyogJY8p5H0g/wARq1aoyUC1GkoYgJ+LUt3vw8B3cZm5aHsL1lX2mUeJAi1x1MmwqJf9wnglHa71mzVapVTuGrOeZJjcXjjRtlLXIzA3tpw+Uxc79G49/V7wwZ4z0U6ZVKFZRiKlRsO41GpKEgENbj3W5z1DZm3cPXF6VdH3aG6Nf9plnJPldb8NwIQi9RvFoQM6MjkyBJEIyZJkgQBkEQ7TLQFkQSIy0y0BJEEiOIgEQpVpMK0yByKRqxaiNSR6aYsYICxghkQhXgzLwgrzM0WWkZoDs0zNE55meA7NJDQKaM25SflLKYJt7WUesbS2ADQw0vUNmqRfMW+El8Gg0II8zJ1RjrimGhq0tDZoLABjrrw3R1bBqN1x4GTqidUVFMJ3CjMxAA3kmwE1W3to9Qwpp7RGYk62BJAA9D8JzGJxz1T2mLfKcc/ycce0dsOG5d1L/E3b4dFw9E3XWpUbUA29kAcRvPpOAw+Bd0GSmGIO+4B8zN90kp5qouAQUK23DeePnKGzA9+rDlBoCQAb21G/ynD9tvdu8cl00BoMjDMpBQkEcRvt85sKydaytusoUjyMt7W2a6MzFy+YDtEAG9rjdKCXVc9iQCubfuP92vOuOfVHDLDpunX9GekuDwlE06+EZ6ga6VkWkzMh3C7EEEWI46TqNndO6dYlKOAq1N5NmUtYW1tPL6lMMSVFhcEDfa+4Tr+jW2BgGNNcOK9SqaaAmp1YUg9+U7yw/wBszuNzfh6js7HJWoGyVqDCwFOrTemQeNgw1HMSxTfvPqLRGCxNZ6f3uHp0z3LWNW3/AAEtLTJH9LSzOzwtxlGrRkqikV3RGBoP9vRFzdVWp1mqqSSFdcuV1v7J1A00N51x5t9rHPLj1NtkIQlqrs8ruNxEVKRU2YfxO7luUMyZMgRaRaFMtAWRIIjLQSIUvLMhWPKZA41Y1YpY1ZHqMWGIAhiGRSCZkBjAhmii8ioYsmFkNzx2ETO3IamVLy9slhnN7gm1rW89OMl8Jl4bvCdk5T7J3X4S9SS16beKHvHdBo4bsWNiOAG8eF/lHqBlAfh7LW1HjMR5bVXqCjG3HVTzG8SwLVaf6rWt3GPIvusbHUfwe6UKjLTe4cLfWxIBHlGjybs7W9/aUZZlXfKOF23R60rex1GY2yMeRlutikvqyjzEljWrK4XpM3+bqX1t1ajkOrU/MmalJe6VYSuMYatNeto18nsamnUChSG7gbA35nulNSVOR1ZXHunQzwcmF3a+jxZy4yNHt6jcqyj3reZ/+TWVsEQesLsQ5GbgUHC1v71kdI9q1VxIpFQtHS/FmvxvwsbSh1tT8PrHI3qcxOdb38yOI4iWYVnPObvZdxOy3W7B8wJZtSdx9nfz0gUKCkG+5lYW9SPQ3HpLYdnwq1FP4ZAqDvT2T6HKfDWDhDmpLUFuydfGym3n/M3jb8uWUnw12DU219qwP+pbkTcbOXNiFNr36wr4q2bTyI9JrcG2aqcu4HKeOth/2m52VZatK/uu1/BlKn5SZeaY+JW6f/EbFrWKnDUTTVsrBWqZyL20OuvK09H2VjhVUGxUkA2bfPJ8bhxTxh7Ooq07343dTfws09Uwu0BVQPTUopvYMAG0NtbeE6Ybzuky1IZj9o0aP4tWmndndV+Zmz6OEVR9oXVCuWk351JuzDvU2Wx42nK4vo3h8RiVr4gF1UC9Owyuw3ZuXLjO0w2PSwXReCru0HcJ2w47Mt1x5c9zUbCpu9JXenmPeDofKQmIzkgbl1Pj3RiaC3HjO7zK74AW0OvC+6UGUg2M3Q7t8ViKAYfIyrMmpmRlSiV38YIEOgZFodpBEALTJMyBxCxqxSxqyPUYIQgrDEIyC0OCRAruIsiWWWJZYWAtMBsbjhrJkQrrdi48MnMaGbbNccPOcDhcQabBlPjzE6zBY3OBM3s83Jhq7W6mHJFuzY8BmX5Gc9tfYGe7oCH8cyt9Z0YI8YqqL/0kYls8PPSCjZWBBG8GWqLzotqbMFVf1D2W7v6Tm6uGeke2tuY1HrLK9GOcrY0mh4jCU6q5aihhw4EHvBGolGhUl1KoAudwFzL5WvHOmdPLiHUk/d9i5N7gXN/S00OC2ib2fyNrjTgR9eE2vSesalR341DUY+ZnOFeGnOebDGZRM7ZXpew8tShVVhlZ0bK97g3U6394cD7wHeBNVgOxhjc6KKDHxy6ma3o9j3p4esl7qyZgDrZgdCO43tNjVFsNXtqBTpW8hp8Ms49Orr+um9zYehlHrapNtGqC3kP6Cbfa1PJVCrybwuD/ANhEdBVyU6R0uwrOD3m4RT6sTN3tTDhrvxYlV/aFH8D4zOfvrWHshPSdD2aw1Z6VNr/qVqYPynf7FcPh6bLuZQw85x20gHw+/wDCNekSOTEW+N/KdD0MrXoZOCsR+2+vprOv4+WstM8k7OgVY0JJCRirPa8yS72ARstiCf1AcDyi8DtrrXK7mubqTbdy4wqtSwsurHcOfOU8FsEZjVqVWaod9mIHoJnL+MXTp6VXmPAfWOzTX4PCUyLWOYbwxJ85dWgPGajmTjl7N+4yiJdxjgdkAbteUpSt4+GSDCkQ0G0yTMgcIsasUsasj1GLDEBYYhBCZaYJMIAiJcR5i3ELFeQYbQDDSDL+ysXlOU+X8ShBMWbSzc07OnXuI5DNDs7GZhY7xv8A5m4w7zm81mlnLNZtCmLa68ptA2k12Me5sNTJkkc+2G3kAKOGpmt2vjxTw9Rr+6yix94iw+c6itSGWxtzvPLel2L6+t1NM2prmZyPZVE0J9Zzy5LJp3wu3H45jn1FxbQbjpxEq03B1zGw1IdQw/kS5UdanYOjG/V8wO7mNJr6qldDox433Dhflv1mMJ20uX22+ykBe1lAdSptqjAj+QJeemcjIb9uhUpm/F07S+dkaa7BnJ292XKzDhYDWdFtOn+HWF8jgkHhmN1YeYqE+vdOO9ZOuvSZsw5KNO2gWioHrc/SbbA4jrHW+qrdzzs2nqb/AO6aTDk9Un/52t+w3Pwk4PFhaWm9wxFz7ItkT6+st8pPDY0GY4WoDvd8SR3m6kg/GbroBjhnK3/EAA/euY29BF7N2eKmGDVT1VI5wrEE1Gzn3V01ItYnv0vARTRrU6eHQoqVEIubsTezF/LhJhdZyrl7dPSWcKLsQo5kARVeoWGWmbE++QbAcpXxFEvqe1b3SNw5S/sjCZRbUodQp3qeRn0N2vDaHAbLI1ZmY8b2N/hNtTo5dLb9x5yxTpxpWakc7VapSs6HjqDzEdXqhBfjwEKoQO0dwmrrVSxufIdwlWTYWNzc7zImSYbRMkyIETJMiFcEsasSsasj1nLDEUsYIZGJMESYREFoRgmFJYRZjXEWYWAMAmE0Aw1BUaxRsw4fETpcFiQy5hxnKsZa2VjMj5T7LbuRmcoxyY7m3WpW+709q9ounStqd8RTqW1EI1b3nN51LbFQihVZdCFax58J5Ftb2qlMblVAx42FzqfEn+xPYMbSzUXXvHy1nke00JaoBvdx/wAHII+IM8/L5jvxeK42uC1Ww93IAebMD8pcTEpUOSqLWCjrBz77ajxF/CZVSznhpe/OwU/ATXuLO/eCD8T/ADOkkyjPeV0eI2e60i6EEBSVdSDbx5fCdL0TqricFVw7gZ6YFamv5SvtKOTDMB+490odHqTZkKHs1VyEH2SxHYJ+IljY9dRWWpTXq7kI6+62bUi3uup0Zd2oI3kDzeY9HixFCysabf8AjqAX3fdVOwSPVP8AdF9H9ldZiGSr+Fh8iseDEAAAciQTAxuKW43Asr0i3NGsCeWXq7/sE6zDoPs/XKNauas2lz2KQJB8zFtJIvDagdsqWVaemb8ptuF9xtvPC8u7Hw3XVScuVKfvEahiRqw8905XYVwELDMA2Z7+83tNfz08J6p0ewgZKz8Kh03d2b6zpxYdWTny5dOK3RwwZRbsunZ9OHMW3GXaFLlY8YjZrkgqeG7ymxWe+PBUKIUyUsdirdld53nulJNlY7EZjlG4b+ZlYQVhw6a0yTIkwMkSZEDJkyZCvP1jVMShjVkes1YwRSmMWGTBJgiTAwwTJkGAt4oxzxLQsKYxZMNzFEw1GMYhzGsYhzDTpNkYvrKevtLo30Mv3nIbNxZpVQfdPZYcjOtJ75yymnm5MdVlQzzzpPgguKOQXDL1tu5j2T8lneYirpoDOL2vXuatdtAFNNAe8WI9SB6zz8vdvi7OK+zZj7JuKZuDu1K3+N5oMQv3ja6G6kjvBtedVXzVaWdD21KpWVdOPteBP075p8bhrVG3WPVuSNwzC1/DeLxx1c53dT0Mq3wqsfaoVQj8box7J8mIj6eCC4jEP/4adc1lPPJmyr36k3nM7Dx/VrWU3HWLSFu8hjZh6/CbzpftD/JKKZyvWDVG71oMfmSovyDTFx9Vn231Tpl+nNYite63FwwqA95zdofL0nqewFBw9FOOVst/y1Oxc+BVfWeM0KmaqB3qD67p6xUJomkoNuppUlbn2bt8CfSTknTqLx3bYbHwq9Y9M7iGycuNvTT1npHRgf5cX3lql/JiPkJ5ZV2j1Z6wXDG7roL/AJiBz1LDkT3T0fojtJa9BWUjtXNhuD++PW5851/Hym3H8melusPQysfhLMgRGNxIpr+o7hPa8XkvHYvJoPaPwmr8ZBYk3OpO+SIdZNDWFAEOFTJkTIRkyZIgZMkXmQrz5TGqYhTGqZHspymMUxIjFMM04GSIAMIGESYJkyIAPEtHNEOYWEvFMYbmJYw3GExLmMJiHMNQKntDxHznakfDdOIB1HiPnO6InPNx5vhTx7hUJJ8DznB7VpPUyqeyigva2qre2c/qJ0A4XndYtA5UHczW8gCx9coHgZyfSGmTUcqDlqLTt3PkL7uVyDz8N/m5PtOP6cPS2kMNWzKL3Yjqybh6RDXB79bSUQM9VV1VbqpO/ISGW/fbSVsXhS2IJsbjINeAtm8hYyxgKdq7gG+a4Hw18NJjtI3q2owmz8zgcEDO1t2VQWIPHjLfSK1RaS8erRG7gADe1t2+3lLFKqKS1BvZrL4Kxs3re3lKlbDvXpv1VzUQAgDeQe0tv9WnpMTK9W28sZ06arotguvxi6dm4J5C4t8J6Rh8ZRepnxJ+7xDslMbiVP8AQIPOcV0To5L5dGs637ja3/sw9DOloVQcWtEKCmHUNc+6SrEnxJAHnNZ5bz/xMZrFZx4LrTpAEsCEDbjdWAVvTKJ3XQ9x9sxVIa0y6VBbQCpkQVbc7sp043nKUwBUQUx1jqpeoTuFR2y008bgnwUT0Ho5srqXHE06QFRvzVqj529Aq+s6cEu3Lns06EVMujG9gSD+YD6/34aKtXLsWPkO4Tc4oXpt3qCQeYH8aec0Kz3PLhDlhxamHDaYQMCZCGAyYu8IGARkXkEyLwJmQZkDzxDHKZWUxymR7asKYamJUxgMMnAwgYoGEGhB3mXgXmXgY5leoYxzE1DCwioYljDqGIYw3BExLmETFOYagHM7xX7AI94LbxO6efuZ3WDObD02/TT+k55+HHm+C9pU9aY3DOFJ3dllKkfETlcQWr1qlW33dF0GUflDBf78D3ztcVR62nYe0LMv7lNx8ROcwFIBqtDg9YMxIIOTR/6ec8/JO8Y472rmOk+DAxFQAAPUZAp3ZgQNfG4sZolIpGpU32GVbb8za/MCd1022fmQVgwDXKAbiLi6nxuPjOJxdPsEnc7UzfcMxQBlB45bi/jOWU1a643cla2jWapUsRpcaDgFGZj8JuOjeIKEVG07ZQWO9H0PoxNjziRh1Wial7NVcUUtpZd7n4ARuz9mVMVU6umLJRW9wN9Xs5Vvw435JJ7vC+3y2b4MLiCyKAHPbAAAzZgSwH6tD5mKwdU0nqVhq7ugTfewYE+v1mwwdcIWauQEejU6tzvWrTGqNz3+og9H9n9fWbMSaeHBxFQX3lE0XzIQ+EmMq5WadV0Ywyu1ZhqVerUb95+6ogch96fGekooQE92rczOL6M4QYaq9BrE1HpVQ3eli+nLNcTrcbV3IOOreHCe3h7YvDzXeRiD7s343P1mhUzorWpn9p+U5oGd2cD1MIGKUwrw2ZeZeBeZeAwGEIoGTmgMvMgZpN4EzIOaZA84Ro5WlRGjkaR7atK0YrSurRgMM1YBk3iQ0INCGXmXi80zNBpLtEO0l2iHaGpC6jRBaTVaJJhuQd4tzIvFuYULmd30e7eDQdwI9CZ5+5ncdB6mbD5T7rMPr9ZnKOHP7Wzwz2NpSrYY/ajlW90Rj+reCPHsiWcT2Xm7pUBlVwPaGvfOfT1dnm6unu4XpNg2rCy3DEqKSEdskEEsTwXgBxJE53B7PbEClgFBBp1cQ2INrhO0bW43sfW09YqYRCc9u2NzcR4d00nQ7ZXUvWqOVZqtR2JFzYXvvPM/3ac7xep0nL6XnvSPYTU6gRiRlfrKdksrZuQ3bpfwWGqYbJisOorUnCCsg1sG0Gb8rbx5zv8ApPglqoCNCt9W7t/zAmh2IGp0QAx6uuCayA2B7W9Tbsm2kxeKzLUbnLLjutXtPAfb3zUgaNElTUPVMWFUA3LILnlfcbX1lrYWA+yVBTq3FHEJUpmoe12m0DHvN7Tv8BUDKAlNECiy8co7hoI7E7Kp1EK1FDBt/D07p1/R8y93L9/xZ2ViEdVaqgD0jbINCGIvoR7pIBEPDks2upJ1lCoT2VY5mpEpn4ugOl+dred5t9l0/enWONbCsOwfA/KcmDOtreyfA/KcaGnRrj+VlWhZohTDzQ6aMvMvF3mXhDgYd4lTDvAZeZeBeYTCCvJi7zIXT//Z", 
      title: "Sicily Keyrings",
      price: "465",
      isLiked: false
    },
    {
      id: 3,
      image: "data:image/jpeg;base64,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",
      title: "My Sicily phone calfskin bag",
      price: "1,645",
      isLiked: false
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShtd5rKOt_NXmZnkKPllczd8yaOR7RlISpxg&s",
      title: "Calfskin keyrings",
      price: "465",
      isLiked: false
    },
    {
      id: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSgdGJNkkQx8MTTgzTiN2xdwtRocOC3Q-LHQ&s",
      title: "Sicily Shoulder Bag",
      price: "2,245",
      isLiked: false
    },
    {
      id: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBLWZk_qHrJFlArXTiYRM6pyHydLprjcy5Cg&s",
      title: "Mini Sicily Crossbody",
      price: "1,845",
      isLiked: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50  pt-20 py-5">
      <div className="w-full px-0 mx-0">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-serif font-extrabold text-foreground mb-6">
           New Arrivals
</h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto pt-7">
            Discover the New Arrivals hair extension for your unique style and needs
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden w-full">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
          
          {/* Marquee Content */}
          <div className="flex animate-marquee space-x-8 py-4">
            {/* First set of products */}
            {products.map((product) => (
              <ProductCard
                key={`first-${product.id}`}
                image={product.image}
                title={product.title}
                price={product.price}
                isLiked={product.isLiked}
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {products.map((product) => (
              <ProductCard
                key={`second-${product.id}`}
                image={product.image}
                title={product.title}
                price={product.price}
                isLiked={product.isLiked}
              />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200">
            View All Products
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default NewArrivalsPage;