import tw from "twin.macro";
import styled from "styled-components";

export const PrimaryButton = tw.button`px-8 py-3 font-bold rounded bg-blue-400 text-gray-100 
hocus:bg-blue-600 hocus:text-gray-200 focus:shadow-outline focus:outline-none
transition duration-300`;

export const SecondaryButton = tw.button`px-8 py-3 rounded border-solid border border-blue-400 text-primary-400
hocus:border-blue-600 focus:shadow-outline focus:outline-none
transition duration-300`;

export const PrimarySmallButton = styled.button`
  ${tw`px-4 py-2 rounded border-solid border border-blue-400 bg-blue-400 text-gray-100 
  hocus:bg-blue-600 hocus:text-gray-200 focus:shadow-outline focus:outline-none 
  transition duration-300`};

  :disabled {
    ${tw`bg-gray-400 text-gray-200 border-gray-400 cursor-not-allowed`}
  }
`;

export const SecondarySmallButton = tw.button`px-4 py-2 rounded border-solid border border-primary-400 text-primary-400
hover:border-blue-600 hover:text-blue-600 focus:shadow-outline focus:outline-none
transition duration-300`;
