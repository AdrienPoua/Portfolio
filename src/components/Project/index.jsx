import React from 'react';
import styles from './styles.module.scss';
import { Badge } from 'react-bootstrap';

export default function Project({
    image,
    title,
    description,
    year,
    tags,
    technologies,
    github,
}) {
    const handleClick = () => {
        console.log('click');
    };
    const map = new Map([
      ["React", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"],
      ["Node", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"],
      ["MongoDB", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1200px-MongoDB_Logo.svg.png"],
      ["Express", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/1200px-Expressjs.png"],
      ["JavaScript", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"],
      ["HTML", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"],
      ["CSS", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"],
      ["Bootstrap", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"],
      ["SASS", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png"],
      ["Git", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png"],
      ["GitHub", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png"],
      ["React-router", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATQAAACkCAMAAAAuTiJaAAAAw1BMVEX///8SEhL1QlAAAAAPDw8HBwfDw8MLCwuLi4vS0tJnZ2dBQUHv7+/7+/v4+PgGBgbp6ekhISH1PEv1NkYzMzOmpqbLy8tSUlLy8vLExMTl5eVbW1v1OkksLCybm5vX19eTk5OAgIC3t7cXFxd4eHhKSko6OjptbW3+5uj0Kz2urq6goKD7v8P8zdEeHh5qamr2U2D2ZG794OL6r7T5lpz+8PH91tn5jZT3dH31SFb4gYn2W2f3a3X5nKP3dn/7u7/6sLUoWb9mAAAQX0lEQVR4nO1dZ4OiPBAWg2JB7F3sZXXLbe+3d///V70kJCFgmnvuwvryfLlTlzB5SGYmk8mQySQRDxf379fZ7PXN05+zuGX5IXh8bjRHjSzEqDl6voxbnh+Ah6fRKMtgNHq+jVumpOP2rZmNYPRyEbdUycbtyyjKWTbbaN7FLVeScfvS2OfMwzYda0JUrvmceaw9xC1bYvG6p8/oDL2JW7ak4lLIWTpBhXgTTU441J7jli6ZuNyKOctmm+nagId7jrfBkJbOTx5klHmk/Y5bviTiTDo7s6OnuAVMIi4kttND4yNuAZOIOwVpqfnkQEXaeyVuCRMIFWk36UpqH39UpDlxS5hAPMqtZ+MtHWn7cOSkZa9T0jiQLT09vKSkcaCwBKN08cnBrXx+Nh/jFjCReJfOz3TxycWjNMyRrqP4uJdqtdR8clF5l7HWTPfauXi4kbDWeI9bvITiQTbWRmnwlg/nd1NoDhovqasmwONzQ0Rb4zplTYTHp5cGf7w1sndpVE2EyuPda3bbbDZHo4jD23y5v0xdDzEeHi/unl5vXrbNEHGj5nb09vF0f/fn4vJ/lLnWK+Z37Xm/qDnTHv7u5aw1GqMRGofZ5/9FgmllPnQBgtVadjSvEQdAGs2Xp5OfrvOVx5ZpQJgWAMOi3mV/Je5b88QzJe0SAAYDE4CCXuj/WRYB2Z5yAGTihijzaevWdC49kyd6nO72e7G6x5kH0OrpXPwkZ+1Ux9qgXuVwBlnTufpMxtnJhkAqZd44Q6zNdK6XB9saLye5VBiLOPNY07GhD9fyoXaKE9ReWGLSujot/JbvVjVPcKhJBprmULtVkPb3q7vw/QCmjLSlRgsP8t3kxtuX9+G70ZENNMOq6zhrr1Kv4wQPaEhnpzfUdFahv+WkNf98eS++GUMFaVONNlR5C/df3Ynvhiu2nYi0jUYbiqzc0euX9+KbYcrsgEdaSaMNVSrzySWYSo2nR9pQow0VaTenRpqVjrTD0VLoNB1H7X930uCXwnqONdqQhW+zp2g9v8NP+/vVnfhuqFYEtkYbqhXB6e1LSYIcmirNufm/rT0zU2mUQ2d2nsmzv0+xDkUvJ4mn6Xhpqnja9tQcDohzSeRWZ6A9COtPnOxA89AV7hEUdC6XD7RT1GgQtf1dT5+zss7V8t2oRvZUc2GKC+6+50pr31NuOk84s3Sy5uywD3VctMyHfK/4NBWaD7sEcuFhBqY6Ru9RlvV94px5yLuARoksAFYT9SWVi4+tbG42tqe5u84ivwQYbkFK2cPt5cWfu9frSCZkhLHR9v10lk89W6zfa/lde9eX6LKzy9/vWZTsKEhYhqmQ3s/b7dt99HCeY9s/0c11OrNVy627rWFbY/bt4fH+LdsUj65Gc5t9e/94fbr//ffyIczPpD1cu/W6u5p1ftaJd3u6BqBqecgBYHX7B15++T6STcdm9uPu9uGBO5bywwUAOXjnKgDrsZZVTgbmLdZAmgCUBgdcffYhYwwWzxEqMJhlycTUc8CdH6E73wFnFvEpPK/CyGtffpGVh8waYjvZsaI+YE4r4BQ/HN760gK6j1wRz86OxGulHeAEUcDwJ2i2FXd1aWqydqEoMiHxYef8LUK9HK54sRTEMSy9rD3FOJMU0yyagmBd8mdoXhgxA2uNy5/l+kyS4OIIM1MNoK9QY0FlHbUBjOznysvlJSE9iE97tsXxzeo62WptLtkFsIDy8g/5FoBkL7hSl2zagN1RO3lkVMr8jHdN2RWlTGSZyDvZnk11leShNpDubCrtmGLbJJsVxzKkT8sAn1nKfReke3Se7IoHrpqdklpDihtr7UDEhJJCdrkZU5wSyEpqmYiNtn9jrf3BeNAri20nkl1uPxWneGSFNCW2EyK31tqDiAU1mQkzlLNEUeVWlhOk0AuWe0jE4HsxUKXtyQ9AKUkTl6EuyEkzF8klrabKqv1H0sQ5QSrSrhJM2j9OT8UaqvEmjGErp6fWKdxY8I+GQGU9JWmOKkNQTrB3u1FYfkXcW+GnSbbp+oob6+RAxwVJVpABY2qKLSLVikBy6RHSeeOCYhmlcjHlSk2ahCw9QmQmehkll10dvJVm1G5lpUelSwIwTPQuqEy3WAvl5bIwh6JInyuxQSpdGjf4OwS+6BpRrSexVlPUuJVE8hK/SzAQHoACK53rBe908zhTHasQa4ZkazSIsYC1qtbB4cxtg8/aSHlSrFYXsAbaR+jWF2PGZS1naeqVyyyPtdGNOi2ouOAFIk2tY6Sxg8faAVvsl9f7JrSplUpVNPfH2g/hDM5QEJV8fYBaOXuO5HI0Rk96LsNgHX1eINFubQjFNaiylOnW+iK4eAlS0hrN5o121rYzCyXAAFDWrM2WCPTLMM0xl6vCf2aHJzxdPL1stzBhb3vz+6BE99oMJVj6N14lfJd4D7VdYVgurzZjzfKFe6jcXl5efiYrtDPerMrlYWGX3HCQDJVKTMuX2G6cIkWKFClSpEiRIkWKFClSpEiRIkWKFClSpEiRIkWKFD8HhX2Md/HWnBlwZGrvdN/R+B0AfKzm8R1dKwpk6iYmO4OfQGgA4MZ29rvIz6c0AVh/NjfkyBCQBovOfPGJ3E7eA48FAWnoUR7lSdbm8Nb/UL9JSJrme08+jR56NeqKo6nEpGnXkpFjjGb7P4xaCWl6NXs/iwmkBnQPI82wwBFyqFAu+FFII+qWOYD4pae/0dk5OWkmTyatlw3Kgdo/BmnVko+uy8h4jMcqQldJmnk1xDLVg0RevSL8Uvingo5BGlMBYkerHX1hFv4EHUSWkmYFb0t1ghMK/36aonQ80pgHSE+ehOZCZdDp9DtF7uAbFDv9fmfCH5i1iXddZxKiBxda4x7CCUhjZKKHxkIGtDeBMgnuKwA+U8srtDUR99CXuujdLMMnLTPDEjKFtCaz8pVfZ7Xbjvi9g8Kq7qsed9iOTp7aruvm4I/GeobHSGXSmbb8O5gumn/hospc0jIrnDMe2PRev9RCqrjqDnfBnxbxpC5hdntL/HkGn9+uRFrvoi+DrHmvhwvcQ6a1Gb64ZGccT2qvH12HT9o8StpgA0AO3Qy+B7zFzlp7tiAvCd/7zZtWdfqjR90G3WTAqHas60MPl08afZCEtPk6dN8xGclzYj6wn2nj177DcmRDEKTNoxxw8Iv0sOSRT1sLykmuSWu1XhdRAO23nDQ8PedXIS8gB0p0rg3W4bqCIZ+4tgr9aAJUImP/NK0OaaQmAtazzhKEDvZYtG46mciUNPz2pVyZU92fnGmZ50C4NTJc8Ml805zgQ2umIRhp9Kn6h/XP9+otUl1k753kMgPrMTH2ZLRqnyWNVGHyDQGn+CTA9Tc+Qxqnh8swaXXCCTy5Sv+IUVS0VwCJ0Q+KbQfOCJaIc2bQJIa4x3n/AJwjnyKNDH7LRV/yqgwAv77cJ0ib83o4Zkkz6FsBLJchbWD7GBSpefcnfIV+BG7gMBE+yUek6/H/cTEJ2jFkCMhAaSOdRm5rSXUalalToEJMWQr968k89bWJjLQyc2v/zrCUQg2/achTsHWX/AE++75XOAM2Q/5v1jEWVFVaPjFUmcxqlUqNVA7xh2+JCjjp5cljxCdii5TEcrtTbOOyjZbrON46nYybMlo7zx0eaYbByETactGMMPCAqF5N+7Rp3E8ZaZ18n0yz6hjeOV8Mnq6JemiHXQeWNAtWioa9o9+Ylg9a/Qb4xbsc3AViFPCrxkyrBweh10zOsvzfnBz25P1ShvTmXdRPooX8M+WkUZmfxshEhAR+CRzCi1VHo6G3os9VQVomKH0S+Gk1Igy+YEYeby1EmgXc4XDlwrFpCABA2XeZSe1AovQqC3wLj1J7WOqu1q26PyTp++5AeFbjUj8T/0JfNEraAQt2b/as/LZIaVhic4qY1ly5p08aXRHsiFnEPRzgAkCIVkpa1Z172tSp5cdi0kp5PGWwgNY64yAQL5P6S449QM+7YodIm5APdNXfDbTIZ0gz6xsyOK7w7KRrPywTmp8Hk0amQMnvoFPp4h6OGdKsBbOC4FPmrZWxe+cQT9wiXh7R6EzZ3cF8vGR0LGCeH1OAJT9tz/P94uTzpOF4t4ObztHquVQV9D9BWmDoOD0kpIVCsnzSYAstNBV6onfYEdK8dZJ/p6CniDTymkV+sPWT07OLhhbxWYIqQufMzQ4nTUTBhiWNXaoyEhFQ2qCEPaqFzTB80uxlsDAJTMiRSOPIhAwHnfn0iPqOUXKHkuZQ0qI9ZEgzAVuEjdI6cHoQdp66V+iuPaz3jYUVBiJtYOAOIlesTsZ5SDi6QHAY/1mHNM9P82WqzalTih5BbU9dTiUjjeh1EWkV0rYZ7SFLWo5LWtAjYptMC/YUPycw7NXCsCGjxMMpL887NjVqsBW6fp2Sdset1bC0me30SaMrggr1AeEFpJvQOfdRYpigpGEfaUKeq2J6gpm930MFacGSpUY14ySQx6rT32275/hmq0A4873TEksaGQ6Bti6DKo0r4FtUZRsr7DKKeMMmerikSDidM/gL0xgwpGGNR6aukLRWDssS6iEWTJe0IHQFBwUd+SRa4i0pLbdcWvaDUegbyB5gpyd9XT2pkISHnv/HJKJd5exJc9eeoeVbITID6aiGKq9P+R2EehMljaqNvR7adWC1VqUl46epSaPTDC4ig9W7r9Fr3hrdhG9+KWbs8N1obUYQ+mj6hidPZuSAIc1Ab2ApjkN751zS6CPoZNgVWptt2heY2hHkCvdozeIIaSb0zmvzAjuK/X7UuriHk0NIm4bUUWAYjOV02sWWDCoXQlqu5Y3lXlAE1KPXGQTEWGA9W67DWuyKbkMghCKXXNJCoz+IVgB3OaNVTKwreIFTD9q2jGCBHiEN22aoPIK1a305nq5oDzOHkEZHMPIqglpVFmv8+8x8rBqrleU9HtoY4jsocOnZ1hxzXSYaowm7JVzSfoUe5ITGv6ygadIME65iy8hi0sJvnEZfTkI9pDGT/EGkBSoCjYodr34QVOfUpnm6yfNtrSAgaaK+cap5E5e4fShp1O2b4es5MpE4c/i25iJEWrger//lubg1bdKI82i5vpE8j77WyARrRGeorqAJOi0agUakVUqRgKgZRHyr7C8a05M+SGwTp/sybfBKNPzyELAph/w0uuRivxxHI7cmjs1ISTND4e5ogGLuso16yuAXXc3TR1T1zGI/mIVTv2sm+wyrYEM9DDbAbGmMNDKF6GbxvB6RaRr8rcsM+eEA+yNVTJrdYqYvqYa3C7dWBUvcQxxlN6ssaXShwpL2i3xJFuW1gom3o6D6LAfGrgB3ltBr1Fz45RwqX/g6Nxcv1SYb4O8ZmfBNa2z2SttA6y+492OGV1o0Py20md4i35JRaRcMLBPURCV2D3lSRvtdcANsWWF3o/zOrPzdMNiVDeECbapVSWut/d0olrQ8Aetl2uTLPg2pOvlp112YV61S+KWA9m5TXq+7Bewq9s6H3qdZv8L8wbLsra/cYbTwkN0euqZZL8+iuXo9cvcOK9OAfku/quRn3bphXJWX8+h2a2e5Xpj11diT1envXdifra/MhdcVlolKv9B1veXiOtTDDrktE1z+D27uNxfT5wnWAAAAAElFTkSuQmCC"],
    ]);
    
    return (
        <div className={`${styles.project} mb-5 p-0 `}>
            <a
                className={`position-relative ${styles.height}`}
                href='test'
            >
                <img
                    src={image}
                    alt='Apercçu du projet'
                    className='rounded-top'
                />
                <div
                    className={`d-flex flex-column position-absolute bottom-0 left-0 ps-4 pb-2 text-light`}
                >
                    <div className='fw-500 fw-bold fs-4 '>
                        {year}
                    </div>
                    <h2 className='fw-bold text-capitalize fs-1 lh-1'>
                        {title}
                    </h2>
                    <p className='fs-3'>{description}</p>
                </div>
            </a>
            <div
                className={`${styles.height} d-flex justify-content-between p-1 `}
            >
                <ul className='d-flex gap-4  justify-content-center align-items-center ps-2 h-100 flex-wrap'>
                    {github && (
                        <li className=''>
                        <a href={github} className={styles.link}>
                            <Badge
                                bg='black'
                                text='light'
                                className={`d-flex align-items-center gap-2 fs-5 px-5 ${styles.badge}`}
                            >
                                <svg
                                    stroke='currentColor'
                                    fill='none'
                                    stroke-width='2'
                                    viewBox='0 0 24 24'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    height='18'
                                    width='18'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
                                </svg>{' '}
                                GitHub
                            </Badge>
                        </a>
                        </li>
                    )}
                    {tags.map(
                        (tag, index) => (
                            <li
                                className='p-0'
                                key={index}
                            >
                                <Badge
                                    bg='secondary'
                                    text='light'
                                    className={`d-flex align-items-center gap-2 fs-5 px-3 ${styles.badge}`}
                                >
                                   
                                    {tag}
                                </Badge>
                            </li>
                        )
                    )}
                </ul>
                <ul className='flex-wrap d-flex p-0  gap-2 d-flex align-items-center justify-content-center h-100'>
                    {technologies.map(
                        (tech, index) => (
                            <li key={index}>
                                <img
                                    src={map.get(tech)}
                                    alt={tech}
                                    className={`d-flex align-items-center gap-2 fs-1 ${styles.badge}`}
                                ></img>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
}
