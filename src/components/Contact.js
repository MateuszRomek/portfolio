import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { SectionTitle, PaddingLeft } from '../shared/index';
import Mailbox from '../assets/svg/mailbox.svg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Button from './Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
const ContactSection = styled.section`
  padding: 40px 25px;
  max-width: 1920px;
  margin: 0 auto;
  overflow: hidden;
`;
const ContactInner = styled.div`
  display: flex;
  justify-content: center;
`;
const Form = styled.form``;
const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 810px) {
    margin-bottom: 0px;
  }
`;
const InputContainer = styled.div`
  position: relative;
  margin-left: ${({ isMargin }) => (isMargin ? '20px' : '0px')};
  width: ${({ isSolo }) => (isSolo ? '100%' : 'auto')};
  @media (max-width: 955px) {
    margin: 10px 15px;
    width: 100%;
  }
`;

const FormInput = styled.input`
  padding: 5px 10px;
  color: inherit;
  font-size: 16px;
  width: 100%;
`;

const FormTextArea = styled.textarea`
  font-size: 16px;
  padding: 5px 10px;
  color: inherit;
  resize: none;
  width: 100%;
  min-height: 150px;
  font-family: inherit;
`;

const FormLabel = styled.label`
  padding: 5px 0;
  position: absolute;
  font-size: 16px;
  top: 0;
  left: 20px;
  pointer-events: none;
  transition: transform 0.2s;
  ${FormInput}:focus ~ &,
  ${FormInput}:not(:placeholder-shown) ~ & {
    font-size: 14px;
    transform: translate(-20px, -25px);
    color: ${({ theme }) => theme.colors.buttonBg};
  }

  ${FormTextArea}:focus ~ &,
  ${FormTextArea}:not(:placeholder-shown) ~ & {
    font-size: 14px;
    transform: translate(-20px, -25px);
    color: ${({ theme }) => theme.colors.buttonBg};
  }
`;
const SvgContianer = styled.div`
  max-width: 300px;
  max-height: 300px;
  margin-left: 300px;
  align-self: center;
  & svg {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1115px) {
    margin-left: 150px;
  }
  @media (max-width: 930px) {
    max-width: 200px;
    max-height: 200px;
  }

  @media (max-width: 745px) {
    display: none;
  }
`;

const ContactSpan = styled.div`
  font-size: 18px;
  padding-top: 20px;
`;

const ErrorMessage = styled.span`
  font-size: 0.8rem;
  padding: 5px;
  color: red;
  display: block;
`;

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email address is required'),
  name: yup.string().required('This field cannot be empty'),
  message: yup.string().required('This field cannot be empty'),
});

const Contact = () => {
  const wrapper = useRef(null);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
  });
  console.log(formik.values);
  console.log(formik.errors);
  console.log(formik.touched);

  useEffect(() => {
    const container = wrapper.current;
    const title = container.querySelector('.contactTitle');
    const form = container.querySelector('.form');
    const svgContainer = container.querySelector('.mailboxContainer');
    const contactInformation = container.querySelector('.contactInformation');
    const svg = svgContainer.children[0];
    const postOne = svg.querySelector('#postOne');
    const leafTwo = svg.querySelector('#leafTwo');
    const leafOne = svg.querySelector('#leafOne');
    const postTwo = svg.querySelector('#postTwo');
    const cards = svg.querySelector('#cards');
    const envelope = svg.querySelector('#envelope');
    const topEnvelope = svg.querySelector('#topEnvelope');
    const bodyBox = svg.querySelector('#bodyBox');
    const doors = svg.querySelector('#doors');

    gsap.registerPlugin(ScrollTrigger);
    gsap.set([title, ...form.children, ...svg.children, contactInformation], {
      autoAlpha: 0,
    });
    gsap.set([postTwo, leafTwo, leafOne, postOne, cards], {
      transformOrigin: '50% 100%',
    });
    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      scrollTrigger: { trigger: '.contactTitle', start: 'top: 70%' },
    });

    tl.fromTo(title, { x: '-=50' }, { duration: 1, x: '+=50', autoAlpha: 1 })
      .fromTo(
        form.children,
        { y: '+=20' },
        { y: '-=20', duration: 1, autoAlpha: 1 },
        '-=.8'
      )
      .fromTo(
        contactInformation,
        { x: '-=50' },
        { duration: 1, x: '+=50', autoAlpha: 1 }
      )
      .fromTo(
        postTwo,
        { scaleY: 0 },
        { scaleY: 1, duration: 1, stagger: 0.2, autoAlpha: 1 },
        '-=2'
      )
      .fromTo(
        [leafOne, leafTwo],
        { scaleY: 0 },
        { scaleY: 1, duration: 1, stagger: 0.2, autoAlpha: 1 },
        '-=3'
      )
      .to([bodyBox, doors, postOne], { autoAlpha: 1, duration: 0.7 }, '-=1')
      .to(
        [envelope, topEnvelope],
        {
          autoAlpha: 1,
          duration: 0.8,
        },
        '-=1'
      )
      .fromTo(cards, { scaleY: 0 }, { duration: 1, scaleY: 1, autoAlpha: 1 });
  }, []);
  return (
    <ContactSection ref={wrapper} id="contact">
      <PaddingLeft>
        <SectionTitle className="contactTitle">Contact me</SectionTitle>
      </PaddingLeft>
      <ContactInner>
        <Form
          className="form"
          method="POST"
          data-netlify="true"
          name="ContactForm"
        >
          <input type="hidden" name="form-name" value="ContactForm" />

          <FormRow>
            <InputContainer>
              <FormInput
                type="text"
                id="name"
                autoComplete="none"
                name="name"
                placeholder=" "
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormLabel htmlFor="name">Name</FormLabel>
              {formik.touched.name && formik.errors.name ? (
                <ErrorMessage>{formik.errors.name}</ErrorMessage>
              ) : null}
            </InputContainer>
            <InputContainer isMargin={true}>
              <FormInput
                placeholder=" "
                name="email"
                type="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormLabel htmlFor="email">Email</FormLabel>
              {formik.touched.email && formik.errors.email ? (
                <ErrorMessage>{formik.errors.email}</ErrorMessage>
              ) : null}
            </InputContainer>
          </FormRow>
          <FormRow>
            <InputContainer isSolo={true}>
              <FormTextArea
                placeholder=" "
                name="message"
                id="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormLabel htmlFor="message">Message</FormLabel>
              {formik.touched.message && formik.errors.message ? (
                <ErrorMessage>{formik.errors.message}</ErrorMessage>
              ) : null}
            </InputContainer>
          </FormRow>
          <InputContainer>
            {formik.values.name &&
            formik.values.email &&
            formik.values.message ? (
              <Button type="submit">Send</Button>
            ) : null}
          </InputContainer>
        </Form>
        <SvgContianer className="mailboxContainer">
          <Mailbox />
        </SvgContianer>
      </ContactInner>
      <PaddingLeft>
        <ContactSpan className="contactInformation">
          Or send me{' '}
          <a href="mailto:mateusz.romek@outlook.com">a direct email</a>{' '}
        </ContactSpan>
      </PaddingLeft>
    </ContactSection>
  );
};

export default Contact;
