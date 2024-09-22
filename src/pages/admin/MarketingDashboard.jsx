import React from "react";
import {
  Box,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  SimpleGrid,
  GridItem,
  Select,
} from "@chakra-ui/react";
import { Line, Doughnut } from "react-chartjs-2";

// Mock data for charts and stats
const sessionsData = {
  labels: ["Apr 9", "Apr 16", "Apr 23", "Apr 30", "May 7"],
  datasets: [
    {
      label: "Visits",
      data: [300, 500, 250, 400, 200],
      borderColor: "blue",
      backgroundColor: "rgba(0, 0, 255, 0.2)",
    },
  ],
};

const contactsData = {
  labels: ["Apr 9", "Apr 16", "Apr 23", "Apr 30", "May 7"],
  datasets: [
    {
      label: "New Contacts",
      data: [1, 3, 5, 2, 4],
      borderColor: "blue",
      backgroundColor: "rgba(0, 0, 255, 0.2)",
    },
  ],
};

const leadGenGoalData = {
  datasets: [
    {
      data: [44, 56],
      backgroundColor: ["#FF6384", "#ccc"],
    },
  ],
};

const optionStyle = {
  backgroundColor: "#00060F",
  color: "white",
};

export default function MarketingDashboard() {
  return (
    <>
      <SimpleGrid columns={2} gap="8px">
        <GridItem bgColor="app_black.0" border="1px solid black" p="12px">
          <Flex mb="8px" alignItems="center" justifyContent="space-between">
            <Heading fontSize="18px" color="white">
              SESSIONS
            </Heading>
            <Select
              bg="black"
              color="white"
              cursor="pointer"
              width="fit-content"
              fontSize="12px"
              ml="8px"
              border="none"
              outline="none"
            >
              <option style={optionStyle}>Last 30 days</option>
            </Select>
          </Flex>

          <Stat my="16px">
            <StatNumber>12411</StatNumber>
            <StatHelpText>
              <Text color="red.500">▼ 9% (Comparison period: 13564)</Text>
            </StatHelpText>
          </Stat>

          <Line data={sessionsData} />
        </GridItem>

        <GridItem bgColor="app_black.0" border="1px solid black" p="12px">
          <Flex mb="8px" alignItems="center" justifyContent="space-between">
            <Heading fontSize="18px" color="white">
              NEW CONTACTS (W/O OFFLINE SOURCES)
            </Heading>
            <Select
              bg="black"
              color="white"
              cursor="pointer"
              width="fit-content"
              fontSize="12px"
              ml="8px"
              border="none"
              outline="none"
            >
              <option style={optionStyle}>Last 30 days</option>
            </Select>
          </Flex>

          <Stat my="16px">
            <StatNumber>44</StatNumber>
            <StatHelpText>
              <Text color="red.500">▼ 17% (Comparison period: 53)</Text>
            </StatHelpText>
          </Stat>

          <Line data={contactsData} />
        </GridItem>
      </SimpleGrid>

      <SimpleGrid mt="8px" columns={3} gap="8px">
        <GridItem bgColor="app_black.0" border="1px solid black" p="12px">
          <Stat m="0 auto">
            <Flex alignItems="center" justifyContent="space-between">
              <StatLabel fontSize="18px">Lead Gen Goals</StatLabel>
              <Select
                bg="app_black.0"
                bgColor="app_black.0"
                color="app_white.0"
                cursor="pointer"
                width="fit-content"
                fontSize="12px"
                ml="8px"
                border="none"
                outline="none"
              >
                <option style={optionStyle}>Last 30 days</option>
              </Select>
            </Flex>

            <StatNumber>44</StatNumber>
            <StatHelpText>
              <Text color="green.500">▲ 47% (Comparison period: 32)</Text>
            </StatHelpText>
          </Stat>
        </GridItem>

        <GridItem bgColor="app_black.0" border="1px solid black" p="12px">
          <Stat m="0 auto">
            <Flex alignItems="center" justifyContent="space-between">
              <StatLabel fontSize="18px">New Users</StatLabel>
              <Select
                bg="app_black.0"
                bgColor="app_black.0"
                color="app_white.0"
                cursor="pointer"
                width="fit-content"
                fontSize="12px"
                ml="8px"
                border="none"
                outline="none"
              >
                <option style={optionStyle}>Last 30 days</option>
              </Select>
            </Flex>

            <StatNumber>1360</StatNumber>
            <StatHelpText>
              <Text color="red.500">▼ 47% (Comparison period: 2,587)</Text>
            </StatHelpText>
          </Stat>
        </GridItem>

        <GridItem bgColor="app_black.0" border="1px solid black" p="12px">
          <Stat m="0 auto">
            <Flex alignItems="center" justifyContent="space-between">
              <StatLabel fontSize="18px">Email Opened</StatLabel>
              <Select
                bg="app_black.0"
                bgColor="app_black.0"
                color="app_white.0"
                cursor="pointer"
                width="fit-content"
                fontSize="12px"
                ml="8px"
                border="none"
                outline="none"
              >
                <option style={optionStyle}>Last 30 days</option>
              </Select>
            </Flex>

            <StatNumber>4171</StatNumber>
            <StatHelpText>
              <Text color="red.500">▼ 38% (Comparison period: 6775)</Text>
            </StatHelpText>
          </Stat>
        </GridItem>
      </SimpleGrid>

      <SimpleGrid mt="8px" columns={3} gap="8px">
        {/* Marketing Performance */}
        <GridItem bgColor="black" border="1px solid black" p="12px">
          <Box w="100%">
            <Flex alignItems="center" justifyContent="space-between">
              <Heading fontSize="18px" color="white">
                Marketing Performance
              </Heading>
              <Select
                bg="black"
                color="white"
                cursor="pointer"
                width="fit-content"
                fontSize="12px"
                ml="8px"
                border="none"
                outline="none"
              >
                <option style={optionStyle}>Last 30 days</option>
              </Select>
            </Flex>

            <Table mt="20px" variant="simple" color="white">
              <Thead>
                <Tr>
                  <Th color="gray.400">Metric</Th>
                  <Th color="gray.400">Last 30 Days</Th>
                  <Th color="gray.400">▲</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Sessions</Td>
                  <Td>12,411</Td>
                  <Td color="red.500">▼ 9%</Td>
                </Tr>
                <Tr>
                  <Td>Contacts</Td>
                  <Td>44</Td>
                  <Td color="red.500">▼ 17%</Td>
                </Tr>
                <Tr>
                  <Td>Leads</Td>
                  <Td>24</Td>
                  <Td color="red.500">▼ 25%</Td>
                </Tr>
                <Tr>
                  <Td>Customers</Td>
                  <Td>0</Td>
                  <Td color="red.500">▼ 100%</Td>
                </Tr>
                <Tr>
                  <Td>Bounce rate</Td>
                  <Td>1.34%</Td>
                  <Td color="red.500">▲ 425.72%</Td>
                </Tr>
                <Tr>
                  <Td>Avg. Session Duration</Td>
                  <Td>0h 1m</Td>
                  <Td color="red.500">▼ 32%</Td>
                </Tr>
                <Tr>
                  <Td>Pages / Session</Td>
                  <Td>4.61</Td>
                  <Td color="red.500">▼ 20%</Td>
                </Tr>
                <Tr>
                  <Td>Pageviews</Td>
                  <Td>7,565</Td>
                  <Td color="red.500">▼ 58%</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </GridItem>

        {/* New Contacts by Source */}
        <GridItem bgColor="black" border="1px solid black" p="12px">
          <Box w="100%">
            <Flex alignItems="center" justifyContent="space-between">
              <Heading fontSize="18px" color="white">
                New Contacts by Source
              </Heading>
              <Select
                bg="black"
                color="white"
                cursor="pointer"
                width="fit-content"
                fontSize="12px"
                ml="8px"
                border="none"
                outline="none"
              >
                <option style={optionStyle}>Last 30 days</option>
              </Select>
            </Flex>

            <Table mt="20px" variant="simple" color="white">
              <Thead>
                <Tr>
                  <Th color="gray.400">Source</Th>
                  <Th color="gray.400">Last 30 Days</Th>
                  <Th color="gray.400">▲</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Offline Source</Td>
                  <Td>1,506</Td>
                  <Td color="green.500">▲ 241%</Td>
                </Tr>
                <Tr>
                  <Td>Direct Traffic</Td>
                  <Td>21</Td>
                  <Td color="red.500">▼ 25%</Td>
                </Tr>
                <Tr>
                  <Td>Organic Search</Td>
                  <Td>9</Td>
                  <Td color="red.500">▼ 31%</Td>
                </Tr>
                <Tr>
                  <Td>Other Campaigns</Td>
                  <Td>8</Td>
                  <Td color="green.500">▲ 33%</Td>
                </Tr>
                <Tr>
                  <Td>Referrals</Td>
                  <Td>4</Td>
                  <Td color="gray.400">0%</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </GridItem>

        {/* Contacts / Visits by Source */}
        <GridItem bgColor="black" border="1px solid black" p="12px">
          <Box w="100%">
            <Flex alignItems="center" justifyContent="space-between">
              <Heading fontSize="18px" color="white">
                Contacts / Visits by Source
              </Heading>
              <Select
                bg="black"
                color="white"
                cursor="pointer"
                width="fit-content"
                fontSize="12px"
                ml="8px"
                border="none"
                outline="none"
              >
                <option style={optionStyle}>Last 30 days</option>
              </Select>
            </Flex>

            <Table mt="20px" variant="simple" color="white">
              <Thead>
                <Tr>
                  <Th color="gray.400">#</Th>
                  <Th color="gray.400">Name</Th>
                  <Th color="gray.400">New Contacts</Th>
                  <Th color="gray.400">Sessions</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td>Organic Search</Td>
                  <Td>9</Td>
                  <Td>8,185</Td>
                </Tr>
                <Tr>
                  <Td>2</Td>
                  <Td>Direct Traffic</Td>
                  <Td>21</Td>
                  <Td>2,709</Td>
                </Tr>
                <Tr>
                  <Td>3</Td>
                  <Td>Referrals</Td>
                  <Td>4</Td>
                  <Td>447</Td>
                </Tr>
                <Tr>
                  <Td>4</Td>
                  <Td>Paid Search</Td>
                  <Td>2</Td>
                  <Td>344</Td>
                </Tr>
                <Tr>
                  <Td>5</Td>
                  <Td>Paid Social</Td>
                  <Td>0</Td>
                  <Td>314</Td>
                </Tr>
                <Tr>
                  <Td>6</Td>
                  <Td>Email Marketing</Td>
                  <Td>0</Td>
                  <Td>229</Td>
                </Tr>
                <Tr>
                  <Td>7</Td>
                  <Td>Social Media</Td>
                  <Td>0</Td>
                  <Td>105</Td>
                </Tr>
                <Tr>
                  <Td>8</Td>
                  <Td>Other</Td>
                  <Td>0</Td>
                  <Td>78</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </GridItem>
      </SimpleGrid>
    </>
  );
}
