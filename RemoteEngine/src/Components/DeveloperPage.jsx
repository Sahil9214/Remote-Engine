import React, { useState } from "react";
import {
  Flex,
  Input,
  Divider,
  Heading,
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
const DeveloperForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    skills: [],
    professionalExperiences: [],
    educationalExperiences: [],
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSkillChange = (index, e) => {
    const newSkills = [...formData.skills];
    newSkills[index] = e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      skills: newSkills,
    }));
  };

  const handleProfessionalExperienceChange = (index, field, e) => {
    const newProfessionalExperiences = [...formData.professionalExperiences];
    newProfessionalExperiences[index][field] = e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      professionalExperiences: newProfessionalExperiences,
    }));
  };

  const handleEducationalExperienceChange = (index, field, e) => {
    const newEducationalExperiences = [...formData.educationalExperiences];
    newEducationalExperiences[index][field] = e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      educationalExperiences: newEducationalExperiences,
    }));
  };

  const handleRemoveSkill = (index) => {
    const newSkills = [...formData.skills];
    newSkills.splice(index, 1);

    setFormData((prevData) => ({
      ...prevData,
      skills: newSkills,
    }));
  };

  const handleRemoveProfessionalExperience = (index) => {
    const newProfessionalExperiences = [...formData.professionalExperiences];
    newProfessionalExperiences.splice(index, 1);

    setFormData((prevData) => ({
      ...prevData,
      professionalExperiences: newProfessionalExperiences,
    }));
  };

  const handleRemoveEducationalExperience = (index) => {
    const newEducationalExperiences = [...formData.educationalExperiences];
    newEducationalExperiences.splice(index, 1);

    setFormData((prevData) => ({
      ...prevData,
      educationalExperiences: newEducationalExperiences,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to send the formData to the server or perform any other necessary actions
    dispatch(actionDeveloperSignup(formData));
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "70%", margin: "auto" }}>
      <Flex direction="column" align="center">
        <Heading mb={4}>Developer Information</Heading>

        <FormControl isRequired>
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Phone Number</FormLabel>
          <Input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Skills</FormLabel>
          {formData.skills.map((skill, index) => (
            <Flex key={index} align="center">
              <Input
                type="text"
                value={skill}
                onChange={(e) => handleSkillChange(index, e)}
              />
              <Button
                ml={2}
                colorScheme="red"
                variant="ghost"
                size="sm"
                onClick={() => handleRemoveSkill(index)}
              >
                X
              </Button>
            </Flex>
          ))}
          <Button
            mt={2}
            colorScheme="teal"
            onClick={() =>
              setFormData((prevData) => ({
                ...prevData,
                skills: [...prevData.skills, ""],
              }))
            }
          >
            Add Skill
          </Button>
        </FormControl>

        <Divider my={4} />

        {/* Professional Experiences */}
        <Heading mb={4}>Professional Experiences</Heading>
        {formData.professionalExperiences.map((experience, index) => (
          <Box key={index} mb={4}>
            <FormControl isRequired>
              <FormLabel>Company Name</FormLabel>
              <Input
                type="text"
                value={experience.company_name}
                onChange={(e) =>
                  handleProfessionalExperienceChange(index, "company_name", e)
                }
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Tech Stack</FormLabel>
              <Input
                type="text"
                value={experience.tech_stack}
                onChange={(e) =>
                  handleProfessionalExperienceChange(index, "tech_stack", e)
                }
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Time Period</FormLabel>
              <Input
                type="text"
                value={experience.time_period}
                onChange={(e) =>
                  handleProfessionalExperienceChange(index, "time_period", e)
                }
              />
            </FormControl>
            <Button
              mt={2}
              colorScheme="red"
              variant="ghost"
              size="sm"
              onClick={() => handleRemoveProfessionalExperience(index)}
            >
              Remove Experience
            </Button>
          </Box>
        ))}
        <Button
          mt={2}
          colorScheme="teal"
          onClick={() =>
            setFormData((prevData) => ({
              ...prevData,
              professionalExperiences: [
                ...prevData.professionalExperiences,
                {},
              ],
            }))
          }
        >
          Add Professional Experience
        </Button>

        <Divider my={4} />

        {/* Educational Experiences */}
        <Heading mb={4}>Educational Experiences</Heading>
        {formData.educationalExperiences.map((experience, index) => (
          <Box key={index} mb={4}>
            <FormControl isRequired>
              <FormLabel>Degree Name</FormLabel>
              <Input
                type="text"
                value={experience.degree_name}
                onChange={(e) =>
                  handleEducationalExperienceChange(index, "degree_name", e)
                }
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>School Name</FormLabel>
              <Input
                type="text"
                value={experience.school_name}
                onChange={(e) =>
                  handleEducationalExperienceChange(index, "school_name", e)
                }
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Time Period</FormLabel>
              <Input
                type="text"
                value={experience.time_period}
                onChange={(e) =>
                  handleEducationalExperienceChange(index, "time_period", e)
                }
              />
            </FormControl>
            <Button
              mt={2}
              colorScheme="red"
              variant="ghost"
              size="sm"
              onClick={() => handleRemoveEducationalExperience(index)}
            >
              Remove Experience
            </Button>
          </Box>
        ))}
        <Button
          mt={2}
          colorScheme="teal"
          onClick={() =>
            setFormData((prevData) => ({
              ...prevData,
              educationalExperiences: [...prevData.educationalExperiences, {}],
            }))
          }
        >
          Add Educational Experience
        </Button>

        <Divider my={4} />

        {/* ... (previous code) */}
      </Flex>
    </form>
  );
};

export default DeveloperForm;
