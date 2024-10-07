import {
  Badge,
  Box,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import OrderDetailButton from "../../components/OrderDetailButton";
import OrderUpdateButton from "../../components/OrderUpdateButton";
import ConfirmationDialog from "../../components/ConfirmationDialog";
import { HamburgerIcon } from "@chakra-ui/icons";
import SearchFilter from "../../components/SearchFilter";
import Pagination from "../../components/Pagination";
import AllProductOrder from "./AllProductOrder";
import AllPrintOrder from "./AllPrintOrder";

export default function AllOrderPage() {
  return (
    <>
      <Heading as="h2" size="lg" textAlign="center">
        Đơn in đang chờ
      </Heading>

      <Box mt="5" h="40px"></Box>

      <Tabs colorScheme="black">
        <TabList>
          <Tab>Đơn in</Tab>
        </TabList>
    
        <TabPanels>
          <TabPanel>
            <AllPrintOrder />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
